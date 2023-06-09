'use strict';
const cashaddr = require('ecashaddrjs');
const constants = require('../constants');
const { hash160ToAddress } = require('./address');
module.exports = {
    opReturnToUtf8: function (outputScript) {
        console.log(`outputScript`, outputScript);
        const opr = constants.opReturn;
        const knownAppPrefixes = Object.keys(opr.appPrefixes);
        /*
        Accept as input an OP_RETURN hex string
        Return an array of the parsed stack
        i.e. each (bytestack + bytes) msg is an entry in an array
        */

        // Confirm this is an OP_RETURN hex string
        const isOpReturn = outputScript.slice(0, 2) === opr.opReturnPrefix;
        // Remove the 6a identifier as it does not need to be parsed
        outputScript = outputScript.slice(2);
        if (!isOpReturn) {
            return false;
        }

        // Check for memo
        // Memo txs are unique in that they do not have the standard 4-byte app prefix
        // Instead they have a 2-byte prefix
        // https://memo.cash/protocol
        let containsHash = false;
        let containsAddress = false;
        let isMemo = outputScript.slice(0, 4) === opr.memo.prefix;
        let isApp =
            outputScript.slice(0, 2) === opr.opReturnAppPrefixLength || isMemo;
        let isKnownApp =
            knownAppPrefixes.includes(outputScript.slice(2, 10)) || isMemo;

        let outputScriptLength = outputScript.length;
        let opReturnMsgArray = [];
        for (let i = 0; outputScriptLength !== 0; i++) {
            // Check first byte for the message length or 4c + message length
            let byteValue = outputScript.slice(0, 2);
            let msgByteSize = 0;
            if (byteValue === opr.opPushDataOne) {
                // If this byte is 4c, then the next byte is the message byte size.
                // Retrieve the message byte size and convert from hex to decimal
                msgByteSize = parseInt(outputScript.substring(2, 4), 16);
                // Remove 4c + message byte size info from the beginning of outputScript
                outputScript = outputScript.slice(4);
            } else {
                // This byte is the length of an upcoming msg
                msgByteSize = parseInt(outputScript.substring(0, 2), 16);
                console.log(`msgByteSize`, msgByteSize);
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
            if (msgByteSize === 32 && containsHash) {
                pushedMsg = hexMsg;
            } else if (msgByteSize === 20 && containsAddress) {
                // Parse for memo P2PKH hash160
                pushedMsg = hash160ToAddress(hexMsg);
            } else if (
                msgByteSize === 2 &&
                isMemo &&
                Object.keys(opr.memo.actions).includes(hexMsg)
            ) {
                // Parse for memo action
                pushedMsg = `${opr.memo.app}: ${opr.memo.actions[hexMsg].action}`;
                containsHash = opr.memo.actions[hexMsg].containsHash;
                containsAddress = opr.memo.actions[hexMsg].containsAddress;
                console.log(`containsAddress`, containsAddress);
            } else if (msgByteSize === 4) {
                // Check for known apps
                if (knownAppPrefixes.includes(hexMsg)) {
                    pushedMsg = opr.appPrefixes[hexMsg].app;
                    containsHash = opr.appPrefixes[hexMsg].containsHash;
                }
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
