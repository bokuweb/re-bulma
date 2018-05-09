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

var _styles = require('../../../build/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, _styles2.default[this.props.state], this.props.className].join(' ').trim();
    }
  }, {
    key: 'createTextareaClassName',
    value: function createTextareaClassName() {
      return [_styles2.default.textarea, _styles2.default[this.props.color]].join(' ').trim();
    }
  }, {
    key: 'renderHelp',
    value: function renderHelp() {
      if (!this.props.help) return null;
      return _react2.default.createElement(
        'span',
        { className: [_styles2.default.help, _styles2.default[this.props.help.color]].join(' ') },
        this.props.help.text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { className: this.createControlClassName(), style: this.props.style },
        _react2.default.createElement('textarea', _extends({}, this.props, {
          style: {},
          className: this.createTextareaClassName(),
          disabled: this.props.state === 'isDisabled'
        })),
        this.renderHelp()
      );
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  hasIcon: _propTypes2.default.bool,
  hasIconRight: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  type: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger']),
  state: _propTypes2.default.oneOf(['isDisabled']),
  help: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Textarea.defaultProps = {
  style: {},
  className: ''
};
exports.default = Textarea;