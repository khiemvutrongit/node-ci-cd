const math = require('../../../src/math');

describe('math.js Test', () => {
    test('add() should be return 7', async() => {
        const result = await math.add(4, 3);
        expect(result).toEqual(7);
    });

    test('add() should be return error "missing arg"', async() => {
        try {
            await math.add(4);
        } catch (error) {
            expect(error).toEqual('missing arg');
        }
    })

    test('multiply() should be return 12', async() => {
        const result = await math.multiply(3, 4);
        expect(result).toEqual(12);
    });

});