'use strict';
const constants = require('../constants');
module.exports = {
    opReturnToUtf8: function (outputScript) {
        /*
        Accept as input an OP_RETURN hex string
        Return an array of the parsed stack
        i.e. each (bytestack + bytes) msg is an entry in an array
        */

        // Confirm this is an OP_RETURN hex string
        const isOpReturn =
            outputScript.slice(0, 2) === constants.opReturn.opReturnPrefix;
        // Remove the 6a identifier as it does not need to be parsed
        outputScript = outputScript.slice(2);
        if (!isOpReturn) {
            return false;
        }

        let outputScriptLength = outputScript.length;
        let opReturnMsgArray = [];
        for (let i = 0; outputScriptLength !== 0; i++) {
            // Check first byte for the message length or 4c + message length
            let byteValue = outputScript.slice(0, 2);
            let msgByteSize = 0;
            if (byteValue === constants.opReturn.opPushDataOne) {
                // If this byte is 4c, then the next byte is the message byte size.
                // Retrieve the message byte size and convert from hex to decimal
                msgByteSize = parseInt(outputScript.substring(2, 4), 16);
                // Remove 4c + message byte size info from the beginning of outputScript
                outputScript = outputScript.slice(4);
            } else {
                // This byte is the length of an upcoming msg
                msgByteSize = parseInt(outputScript.substring(0, 2), 16);
                // Remove message byte size info from the beginning of outputScript
                outputScript = outputScript.slice(2);
            }
            // Use msgByteSize to parse the message
            const msgCharLength = 2 * msgByteSize;
            let hexMsg = outputScript.slice(0, msgCharLength);

            // Add to opReturnMsgArray
            // If msg byte is 0x20 (32 bytes) i.e. the length of a sha256 hash,
            // assume it's a sha256 hash

            let pushedMsg;
            if (msgByteSize === 32) {
                pushedMsg = hexMsg;
            } else if (
                Object.keys(constants.opReturn.appPrefixes).includes(hexMsg)
            ) {
                pushedMsg = constants.opReturn.appPrefixes[hexMsg];
            } else {
                pushedMsg = Buffer.from(hexMsg, 'hex').toString('utf8');
            }
            opReturnMsgArray.push(pushedMsg);

            // strip out the parsed message
            outputScript = outputScript.slice(msgCharLength);
            outputScriptLength = outputScript.length;

            // Sometimes OP_RETURN will have a series of msgs
            // Return to beginning of loop with i=0 if there outputScript still has remaining unparsed characters
        }
        // If there are multiple messages, for example an unknown prefix, signify this with the | character
        return opReturnMsgArray;
    },
};
