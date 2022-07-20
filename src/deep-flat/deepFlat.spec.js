const deepFlat = (array = []) => {
    if (array === !array.isArray) throw new Error('this is not an array');
    return array.flat(Infinity);
};

//------------testing-----------

describe('deepFlat : flatten the nested array to a single array', () => {
    describe('flatten the nested arrays', () => {
        it('flatten nested arrays', () => {
            expect(deepFlat([1, 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
        });
        it('flatten the nested arrays', () => {
            expect(deepFlat([1, 2, [3, 4, 5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        });

        it('flatten the nested array', () => {
            expect(deepFlat([
                ['44'],
                ['66'],
                ['88'],
            ])).toEqual(['44', '66', '88']);
        });

        it('flatten the nested array', () => {
            expect(deepFlat([
                ['love'],
                ['life'],
            ])).toEqual(['love', 'life']);
        });
        it('flatten the nested array', () => {
            expect(deepFlat([
                ['james'], 'bond', ['007'],
            ])).toEqual([
                'james',
                'bond',
                '007',
            ]);
        });
    });
});

//------------ Error testing ---------------

describe('deepFlat: it should not an array, throw error', () => {
    describe('should not take other data type of value', () => {
        it('should not take direct number', () => {
            expect(() => deepFlat(223344)).toThrowError();
        });
        it('should not take direct string', () => {
            expect(() => deepFlat(' how are you')).toThrowError();
        });
    });
});