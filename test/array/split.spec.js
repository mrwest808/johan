const {split} = require('../../').array;

import expect from 'expect';

describe('array.split', () => {
  it('should export a function', () => {
    expect(split).toBeA('function');
  });

  describe('called with bad parameters', () => {
    it('should throw error(s)', () => {
      expect(() => split(null)).toThrow();
      expect(() => split([], 'x')).toThrow();
      expect(() => split([], 1)).toThrow();
      expect(() => split([], -5)).toThrow();
    });
  });

  describe('called with good parameters', () => {
    it('should return as expected', () => {
      // case 1
      const input1 = [[1, 2, 3], 2];
      const expected1 = [[1, 2], [3]];

      expect(split(...input1)).toEqual(expected1);

      // case 2
      const input2 = [[1], 2];
      const expected2 = [[1]];

      expect(split(...input2)).toEqual(expected2);

      // case 3
      const input3 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], 3];
      const expected3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      expect(split(...input3)).toEqual(expected3);

      // case 4
      expect(split([], 4)).toEqual([]);
      expect(split([], 2)).toEqual([]);
    });
  });
});
