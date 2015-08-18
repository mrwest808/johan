import inv from 'invariant';
import chunk from 'lodash/array/chunk';
import isArr from 'lodash/lang/isArray';
import isNum from 'lodash/lang/isNumber';

/**
 * Split an array into sub arrays of `n` elements.
 *
 * @param  {array}  arr
 * @param  {number} n   [2 or higher]
 * @return {array}
 */
export default function split(arr, n) {
  inv(isArr(arr), 'Expecting `arr` to be an array');
  inv(isNum(n) && n > 1, 'Expecting `n` to be a positive number (> 1)');

  return chunk(arr, n);
};
