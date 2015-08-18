'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = split;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);var _lodashArrayChunk=require('lodash/array/chunk');var _lodashArrayChunk2=_interopRequireDefault(_lodashArrayChunk);var _lodashLangIsArray=require('lodash/lang/isArray');var _lodashLangIsArray2=_interopRequireDefault(_lodashLangIsArray);var _lodashLangIsNumber=require('lodash/lang/isNumber');var _lodashLangIsNumber2=_interopRequireDefault(_lodashLangIsNumber); /**
 * Split an array into sub arrays of `n` elements.
 *
 * @param  {array}  arr
 * @param  {number} n   [2 or higher]
 * @return {array}
 */function split(arr,n){(0,_invariant2['default'])((0,_lodashLangIsArray2['default'])(arr),'Expecting `arr` to be an array');(0,_invariant2['default'])((0,_lodashLangIsNumber2['default'])(n) && n > 1,'Expecting `n` to be a positive number (> 1)');return (0,_lodashArrayChunk2['default'])(arr,n);};module.exports = exports['default'];