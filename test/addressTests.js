const assert = require('assert');
const { changeAddressPrefix, hash160ToAddress } = require('../src/address');
const mocks = require('./mocks');
const { addressMocks } = mocks;

describe('src/address.js', function () {
    it(`Correctly converts an array of ectest: addresses to ecash: addresses`, function () {
        const { array } = addressMocks;
        const { addresses, newPrefix, result } = array;
        assert.deepEqual(changeAddressPrefix(addresses, newPrefix), result);
    });
    it(`Correctly converts an array of ectest: addresses to ecash: addresses`, function () {
        const { string } = addressMocks;
        const { address, newPrefix, result } = string;
        assert.strictEqual(changeAddressPrefix(address, newPrefix), result);
    });
    it(`Correctly converts the hash160 of the IFP address to the P2SH IFP address`, function () {
        const { hash160Conversions } = addressMocks;
        for (let i = 0; i < hash160Conversions.length; i += 1) {
            const { hash, prefix, type, address } = hash160Conversions[i];
            assert.strictEqual(hash160ToAddress(hash, prefix, type), address);
        }
    });
});
