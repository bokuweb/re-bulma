'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'createLabelClassName',
    value: function createLabelClassName() {
      return [_styles2.default.checkbox, _styles2.default[this.props.state]].join(' ').trim();
    }
  }, {
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, this.props.className].join(' ').trim();
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
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'label',
        { className: this.createLabelClassName() },
        _react2.default.createElement('input', { type: 'checkbox' }),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.hasAddons) {
        return this.renderForm();
      }
      return _react2.default.createElement(
        'p',
        { className: this.createControlClassName(), style: this.props.style },
        this.renderForm()
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  children: _propTypes2.default.any,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  hasIcon: _propTypes2.default.bool,
  hasIconRight: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  hasAddons: _propTypes2.default.bool,
  state: _propTypes2.default.oneOf(['isDisabled']),
  help: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    color: _propTypes2.default.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Checkbox.defaultProps = {
  className: ''
};
exports.default = Checkbox;