'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = create;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);var _lodashObjectAssign=require('lodash/object/assign');var _lodashObjectAssign2=_interopRequireDefault(_lodashObjectAssign);var _lodashLangIsPlainObject=require('lodash/lang/isPlainObject');var _lodashLangIsPlainObject2=_interopRequireDefault(_lodashLangIsPlainObject);var _lodashLangIsFunction=require('lodash/lang/isFunction');var _lodashLangIsFunction2=_interopRequireDefault(_lodashLangIsFunction); /**
 * Returns a function that creates a new object linked to the specified
 * `prototype` object, optionally initialized with a `constructor` function.
 *
 * @param  {object}   prototype
 * @param  {function} constructor [optional]
 * @return {function}
 */function create(prototype,constructor){prototype = prototype || null;if(constructor){if(!(0,_lodashLangIsFunction2['default'])(constructor))throw new TypeError('Invalid `constructor`, expecting function');} /**
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
   */return function instantiate(){for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}if(!constructor){var properties=args[0] || {};(0,_invariant2['default'])((0,_lodashLangIsPlainObject2['default'])(properties),'Initial `properties` should be a plain object');return (0,_lodashObjectAssign2['default'])(Object.create(prototype),properties);}var obj=Object.create(prototype);constructor.apply(obj,args);return obj;};}module.exports = exports['default'];