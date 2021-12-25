describe('Simple Math Test', () => {
    test('001 should return 2', () => {
        expect(1 + 1).toEqual(2);
    });

    test('002 should return 9', () => {
        expect(3 * 3).toEqual(9);
    })

    test('003 should be return 6', () => {
        expect(9 - 3).toEqual(6);
    })
});