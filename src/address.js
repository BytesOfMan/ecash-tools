'use strict';
const cashaddr = require('ecashaddrjs');
module.exports = {
    changeAddressPrefix: function (address, newPrefix) {
        if (Array.isArray(address)) {
            const newPrefixAddresses = address.map(addr => {
                const { type, hash } = cashaddr.decode(addr);
                return cashaddr.encode(newPrefix, type, hash);
            });
            return newPrefixAddresses;
        } else {
            const { type, hash } = cashaddr.decode(address);
            return cashaddr.encode(newPrefix, type, hash);
        }
    },
    hash160ToAddress: function (hash, prefix = 'ecash', type = 'P2PKH') {
        const buffer = Buffer.from(hash, 'hex');

        // Because ecashaddrjs only accepts Uint8Array as input type, convert
        const hash160ArrayBuffer = new ArrayBuffer(buffer.length);
        const hash160Uint8Array = new Uint8Array(hash160ArrayBuffer);
        for (let i = 0; i < hash160Uint8Array.length; i += 1) {
            hash160Uint8Array[i] = buffer[i];
        }

        // Encode ecash: address
        const ecashAddr = cashaddr.encode(prefix, type, hash160Uint8Array);

        return ecashAddr;
    },
};
