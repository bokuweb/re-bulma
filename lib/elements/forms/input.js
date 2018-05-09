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

var _helper = require('../../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, _styles2.default[this.props.state], this.props.icon ? _styles2.default.hasIcon : '',
      // Add has-icon-left class because can not user not: selector( csjs bug )
      this.props.hasIconRight ? _styles2.default.hasIconRight : _styles2.default.hasIconLeft, this.props.className].join(' ').trim();
    }
  }, {
    key: 'createInputClassName',
    value: function createInputClassName() {
      return [_styles2.default.input, this.props.isExpanded ? _styles2.default.isExpanded : '', _styles2.default[this.props.color], _styles2.default[this.props.size]].join(' ').trim();
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
    key: 'renderInput',
    value: function renderInput() {
      return _react2.default.createElement('input', _extends({}, (0, _helper.getCallbacks)(this.props), {
        className: this.createInputClassName(),
        disabled: this.props.state === 'isDisabled',
        type: this.props.type,
        readOnly: this.props.readOnly,
        value: this.props.value,
        defaultValue: this.props.defaultValue,
        placeholder: this.props.placeholder,
        name: this.props.name
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.hasAddons) {
        return this.renderInput();
      }
      return _react2.default.createElement(
        'p',
        { className: this.createControlClassName(), style: this.props.style },
        this.renderInput(),
        this.props.icon ? _react2.default.createElement('i', { className: [_styles2.default.fa, this.props.icon].join(' ') }) : null,
        this.renderHelp()
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  className: _propTypes2.default.string,
  hasIcon: _propTypes2.default.bool,
  hasIconRight: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  icon: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  hasAddons: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  isExpanded: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger']),
  size: _propTypes2.default.oneOf(['isSmall', 'isMedium', 'isLarge']),
  state: _propTypes2.default.oneOf(['isLoading', 'isDisabled']),
  help: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  }),
  name: _propTypes2.default.string
};
Input.defaultProps = {
  style: {},
  className: '',
  isLoading: false,
  isActive: false
};
exports.default = Input;