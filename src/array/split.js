import inv from 'invariant';
import drop from 'lodash/array/drop';
import take from 'lodash/array/take';
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

  let subArrs = timesDividableBy(arr.length, n);
  let result = [];

  while(subArrs) {
    result = [...result, take(arr, n)];
    arr = drop(arr, n);

    subArrs--;
  }

  return result;
}

/**
 * Calculate how many times `len` is dividable by `n`.
 *
 * @param  {number} len
 * @param  {number} n
 * @return {number}
 */
function timesDividableBy(len, n) {
  if(len === 0) return 0;

  let count = 1;

  while(len > n) {
    count++;
    len -= n;
  }

  return count;
}
