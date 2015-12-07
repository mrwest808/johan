import inv from 'invariant';
import chunk from 'lodash.chunk';
import isNum from 'lodash.isnumber';

/**
 * Split an array into sub arrays of `n` elements.
 *
 * @param  {array}  arr
 * @param  {number} n   [2 or higher]
 * @return {array}
 */
export default function split(arr, n) {
  inv(Array.isArray(arr), 'Expecting `arr` to be an array');
  inv(isNum(n) && n > 1, 'Expecting `n` to be a positive number (> 1)');

  return chunk(arr, n);
};
