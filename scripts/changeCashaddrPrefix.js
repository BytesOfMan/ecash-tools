const { expand } = require('../src/utils');
const { changeAddressPrefix } = require('../src/address');
const colors = require('colors');
const { address, newPrefix } = require('../inputs/changeCashaddrPrefixInputs');

let result;
try {
    result = changeAddressPrefix(address, newPrefix);
    if (Array.isArray(result)) {
        console.log(`✔ Converted addresses to ${newPrefix}:`.green);
        expand(result);
    } else {
        console.log(`✔ Converted address to ${newPrefix}`.green);
        console.log(`New address: ${result}`);
    }
} catch (err) {
    console.log(`Error converting address to ${newPrefix}`.red, err);
}
