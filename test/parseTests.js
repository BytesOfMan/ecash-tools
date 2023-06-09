const assert = require('assert');
const { opReturnToUtf8 } = require('../src/parse');
const mocks = require('./mocks');
const { parseMocks } = mocks;
const { outputScripts } = parseMocks;

describe('src/parse.js', function () {
    it(`Correctly parses mocked OP_RETURN outputScripts`, function () {
        for (let i = 0; i < outputScripts.length; i += 1) {
            const { outputScript, parsed } = outputScripts[i];
            assert.deepEqual(opReturnToUtf8(outputScript), parsed);
        }
    });
});
