'use strict';
const { opReturnToUtf8 } = require('../src/parse');
const colors = require('colors');
const { parseHexStack } = require('../inputs');
const { opReturnHex } = parseHexStack;

let result = opReturnToUtf8(opReturnHex);
if (result) {
    console.log(`✔ Converted OP_RETURN string to utf8 array`.green);
    for (let i = 0; i < result.length; i += 1) {
        console.log(`${i + 1} | ${result[i]}`);
    }
} else {
    console.log(`Input is not a valid OP_RETURN outputScript`.red);
}
