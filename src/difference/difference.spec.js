 const diffArray = (a1 = [], a2 = []) => {
     const arrayDiff1 = a1.filter((x) => !a2.includes(x));
     return arrayDiff1;
 };


 describe('difference: check the difference between two arrays', () => {
     describe('difference between two arrays', () => {
         it('throw error when array is empty', () => {
             expect(difference([], [2])).toThrowError();
         });
         it('throw error when arrays are empty', () => {
             expect(difference([], [])).toThrowError();
         });
         it('throw error when arrays are not the same type', () => {
             expect(difference(['two'], [2])).toThrowError();
         });
         it('check what is difference between arrays', () => {
             expect(difference([5, 0, 3], [0, 4])).toEqual([5, 3]);
         });
         it('check strings array', () => {
             expect(difference(['one', 'two'], ['one', 'one'])).toEqual(['two']);
         });
         it('check if decimal number is ok', () => {
             expect(difference([1.2, 0, 3], [0, 3])).toEqual([1.2]);
         });
         it('check what is different in array 1', () => {
             expect(difference([1], [1, 2, 3])).toEqual([1]);
         });
         it('check repeated numbers', () => {
             expect(difference([0.5, 0.5, 1], [1])).toEqual([0.5]);
         });
         it('check if it works with repeated numbers', () => {
             expect(difference([1, 1, 2, 2, 3], [1])).toEqual([2, 3]);
         });
         it('check if it works with repeated numbers and not messes up array 1 order', () => {
             expect(difference([1, 2, 1, 3, 2, 4, 2], [2])).toEqual([1, 3, 4]);
         });
     });
 });
 //--------------throw error--------------

 describe('difference: if array is different data type of value,throwError ', () => {
     describe('check array value', () => {
         it('should not be an empty array, it throwError ', () => {
             expect(() => difference([], [3])).toThrowError();
         });
         it('should not be a boolean value, it throwError', () => {
             expect(() => difference(true, [2, 3])).toThrowError();
         });
         it('should not take direct string, it throwError', () => {
             expect(() => difference(tree, [88])).toThrowError();
         });
     });
 });