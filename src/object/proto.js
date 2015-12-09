import inv from 'invariant';
import isObj from 'lodash.isplainobject';

import assign from './assign';
import create from './create';


/**
 * Assign one or more objects.
 *
 * @param  {...Object} ...objects
 * @return {Object}
 */
function combine(...objects) {
  inv(Array.isArray(objects) && objects.length > 0,
    'You must pass at least one object to instantiate'
  );

  inv(objects.every(isObj),
    'Expecting only plain objects as parameter(s)'
  );

  return assign({}, ...objects);
}


/**
 * Create an instantiatable object inheriting from the given prototype object.
 *
 * @param  {Object}   prototype [object to use as prototype]
 * @param  {Function} factory   [factory function, optional]
 * @return {Function}
 */
export default function createProto(prototype = null, factory) {
  if (factory) {
    inv(typeof factory === 'function',
      'Invalid `factory` parameter, expecting function'
    );
  }

  /**
   * Create an object instance by either passing one or more objects, or
   * parameters expected by the `factory` function if specified.
   *
   * @param  {...Any} ...args
   * @return {Object}
   */
  return function instantiate(...args) {
    const enumerable = factory ? factory(...args) : combine(...args);

    inv(isObj(enumerable),
      'Expecting `enumerable` to be a plain object, check `factory` function'
    );

    return create(prototype, enumerable);
  }
}
