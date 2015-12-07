import inv from 'invariant';
import isObj from 'lodash.isplainobject';

import assign from './assign';
import create from './create';


/**
 * Create an instantiatable object inheriting from the given prototype object.
 *
 * @param  {Object}   prototype [object to use as prototype]
 * @param  {Function} validate  [optional, for validating props]
 * @return {Function}
 */
export default function createProto(prototype = null, validate) {
  if (validate) {
    inv(typeof validate === 'function',
      'Invalid `validate` parameter, expecting function'
    );
  }

  /**
   * Create an object instance by passing one or more objects to the function,
   * if `validate` is set it will be run on the object(s) to validate the
   * properties.
   *
   * @param  {...obj} ...objects
   * @return {obj}
   */
  return function instantiate(...objects) {
    inv(Array.isArray(objects) && objects.length > 0,
      'You must pass at least one object to instantiate'
    );

    inv(objects.every(isObj),
      'Expecting objects as parameter(s)'
    );

    const enumerable = assign({}, ...objects);
    if (validate) validate(enumerable);

    return create(prototype, enumerable);
  }
}
