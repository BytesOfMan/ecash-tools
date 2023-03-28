'use strict';
const { hash160ToAddress } = require('../src/address');
const colors = require('colors');
const { getAddressFromHash160 } = require('../inputs');
const { hash, prefix, type } = getAddressFromHash160;

let result;
try {
    result = hash160ToAddress(hash, prefix, type);

    console.log(`✔ Determined ${type} address for ${hash}`.green);
    console.log(result);
} catch (err) {
    console.log(`Error converting hash ${hash} to ${type} address`.red, err);
}
