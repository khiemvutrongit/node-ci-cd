const expect = require('chai').expect;
const math = require('../../math');

describe('math.js tests', () => {
    describe('math.add() Test',  () => {
        it('should throw an error', async () => {
            try {
                await math.add(1);
            } catch (error) {
                expect(error).to.equal('missing arg');
            }
        })
        it('should equal 2', async() => {
            const result = await math.add(1,1);
            expect(result).to.equal(2);
        });
        it('should equal 4', async() => {
            const result = await math.add(2, 2);
            expect(result).to.equal(4);
        })
    });

    describe('math.multiply Test', () => {
        it('should equal 3', async() => {
            const result = await math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', async() =>  {
            const result = await math.multiply(5, 2);
            expect(result).to.equal(10);
        })
    })
})