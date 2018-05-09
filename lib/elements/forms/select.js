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

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, _styles2.default[this.props.state], this.props.className].join(' ').trim();
    }
  }, {
    key: 'createSelectClassName',
    value: function createSelectClassName() {
      return [_styles2.default.select, _styles2.default[this.props.size]].join(' ').trim();
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
    key: 'renderSelect',
    value: function renderSelect() {
      return _react2.default.createElement(
        'span',
        { className: this.createSelectClassName(), style: this.props.style },
        _react2.default.createElement(
          'select',
          _extends({}, (0, _helper.getCallbacks)(this.props), {
            disabled: this.props.state === 'isDisabled',
            defaultValue: this.props.defaultValue,
            value: this.props.value
          }),
          this.props.children
        ),
        this.renderHelp()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.hasAddons) {
        return this.renderSelect();
      }
      return _react2.default.createElement(
        'p',
        { className: this.createControlClassName(), style: this.props.style },
        this.renderSelect()
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  hasAddons: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['isSmall', 'isMedium', 'isLarge']),
  state: _propTypes2.default.oneOf(['isDisabled']),
  help: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Select.defaultProps = {
  style: {},
  className: '',
  isLoading: false,
  isActive: false
};
exports.default = Select;