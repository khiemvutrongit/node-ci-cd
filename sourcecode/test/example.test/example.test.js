const assert = require('assert');
const expect = require('chai').expect;

describe('Simple Math Test', () => {
    it('001 should return 2', async() => {
        assert.equal(1 + 1, 2);
        expect(1 + 1).to.equal(2);
    });
    it('002 should return 9', () => {
        assert.equal(3 * 3, 9);
        expect(3 * 3).to.equal(9);
    })
});