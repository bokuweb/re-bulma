'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCallbacks = exports.getCallbacks = function getCallbacks(props) {
  var callbacks = {};
  Object.keys(props).forEach(function (prop) {
    if (typeof props[prop] === 'function') {
      callbacks[prop] = props[prop];
    }
  });
  return callbacks;
};