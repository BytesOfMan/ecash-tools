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
};
