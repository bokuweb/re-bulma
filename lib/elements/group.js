'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../../build/styles');

var _styles2 = _interopRequireDefault(_styles);

var _helper = require('../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, _styles2.default.isGrouped, this.props.className].join(' ').trim();
    }
  }, {
    key: 'cloneWithProps',
    value: function cloneWithProps() {
      if (_react2.default.Children.count(this.props.children) < 2) {
        return _react2.default.createElement(
          'p',
          { className: _styles2.default.control },
          this.props.children && _react2.default.cloneElement(this.props.children, {
            hasAddons: true
          })
        );
      }
      return this.props.children.map(function (child, i) {
        return _react2.default.createElement(
          'p',
          { key: i, className: _styles2.default.control + ' ' + (child.props.isExpanded ? _styles2.default.isExpanded : '') },
          _react2.default.cloneElement(child, { hasAddons: true })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({
          className: this.createControlClassName(),
          style: this.props.style
        }, (0, _helper.getCallbacks)(this.props)),
        this.cloneWithProps()
      );
    }
  }]);

  return Group;
}(_react.Component);

Group.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.any
};
Group.defaultProps = {
  style: {},
  className: ''
};
exports.default = Group;