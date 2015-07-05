'use strict';

import inv from 'invariant';
import assign from 'lodash/object/assign';
import isObj from 'lodash/lang/isPlainObject';
import isFunc from 'lodash/lang/isFunction';

/**
 * Returns a function that creates a new object linked to the specified
 * `prototype` object, optionally initialized with a `constructor` function.
 *
 * @param  {object}   prototype
 * @param  {function} constructor [optional]
 * @return {function}
 */
export default function create(prototype, constructor) {
  prototype = prototype || null;

  if(constructor) {
    if(!isFunc(constructor))
      throw new TypeError('Invalid `constructor`, expecting function');
  }

  /**
   * Depending on whether a `constructor` parameter was passed to the wrapping
   * function, this will ..
   *
   * A) instantiate an object with the specified prototype and call the
   *    constructor function.
   * B) instantiate an object with the specified prototype and copy the
   *    `properties` as own enumerable properties.
   *
   * In both scenarios, the new object instance is returned.
   *
   * @param  {...any} args
   * @return {object}
   */
  return function instantiate(...args) {
    if(!constructor) {
      const properties = args[0] || {};
      inv(isObj(properties), 'Initial `properties` should be a plain object');

      return assign(Object.create(prototype), properties);
    }

    let obj = Object.create(prototype);
    constructor.apply(obj, args);

    return obj;
  };
}
