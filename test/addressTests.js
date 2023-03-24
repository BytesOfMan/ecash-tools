const assert = require('assert');
const { changeAddressPrefix } = require('../src/address');
const { changeAddressPrefixMocks } = require('./mocks/addressMocks');

describe('src/address.js', function () {
    it(`Correctly converts an array of ectest: addresses to ecash: addresses`, function () {
        const { array } = changeAddressPrefixMocks;
        const { addresses, newPrefix, result } = array;
        assert.deepEqual(changeAddressPrefix(addresses, newPrefix), result);
    });
    it(`Correctly converts an array of ectest: addresses to ecash: addresses`, function () {
        const { string } = changeAddressPrefixMocks;
        const { address, newPrefix, result } = string;
        assert.strictEqual(changeAddressPrefix(address, newPrefix), result);
    });
});
