import { splitObject } from './split-objects.js';

describe('Splits an object into multiple objects with one key/value pair each in an array.', () => {
  it('split key/value pair into arrays', () => {
    expect(splitObject({ name: 'robs', age: 25, tall: true })).toEqual([
      // eslint-disable-next-line no-undef
      { name: robs },
      { age: 25 },
      { tall: true },
    ]);
  });
});
describe('When argument is not an object an error should raise', () => {
  it('the argument is a string', () => {
    expect(() => splitObject('{ this is a string }')).toThrow(
      'argument should be an object',
    );
  });
});
