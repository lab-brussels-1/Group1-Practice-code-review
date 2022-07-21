import { difference } from './diff-solution.js';

describe('return what is in array 1 but not in array 2', () => {
  it('throw error when empty', () => {
    expect(() => difference([], [2])).toThrowError();
  });
  it('throw error when empty', () => {
    expect(() => difference([], [])).toThrowError();
  });
  it('throw error when they are not the same type', () => {
    expect(() => difference(['two'], [2])).toThrowError();
  });
  it('check what is different in array 1', () => {
    expect(difference([5, 0, 3], [0, 4])).toEqual([5, 3]);
  });
  it('check if strings are ok', () => {
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
