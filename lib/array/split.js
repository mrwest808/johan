'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = split;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);var _lodashChunk=require('lodash.chunk');var _lodashChunk2=_interopRequireDefault(_lodashChunk);var _lodashIsnumber=require('lodash.isnumber');var _lodashIsnumber2=_interopRequireDefault(_lodashIsnumber); /**
 * Split an array into sub arrays of `n` elements.
 *
 * @param  {array}  arr
 * @param  {number} n   [2 or higher]
 * @return {array}
 */function split(arr,n){(0,_invariant2['default'])(Array.isArray(arr),'Expecting `arr` to be an array');(0,_invariant2['default'])((0,_lodashIsnumber2['default'])(n) && n > 1,'Expecting `n` to be a positive number (> 1)');return (0,_lodashChunk2['default'])(arr,n);};module.exports = exports['default'];