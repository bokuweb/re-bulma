'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../build/styles');

var _styles2 = _interopRequireDefault(_styles);

var _helper = require('../helper/helper');

var _dataComponent = require('../dataComponent');

var _dataComponent2 = _interopRequireDefault(_dataComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_DataComponent) {
  _inherits(Button, _DataComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'createClassName',
    value: function createClassName() {
      return [_styles2.default.button, _styles2.default[this.props.size], _styles2.default[this.props.color], _styles2.default[this.props.buttonStyle], _styles2.default[this.props.state], this.props.delete ? _styles2.default.delete : '', this.props.className].join(' ').trim();
    }
  }, {
    key: 'createIconSize',
    value: function createIconSize() {
      if (this.props.size === 'isLarge') return 'isMedium';
      if (this.props.size === 'isSmall') return 'isSmall';
      return '';
    }
  }, {
    key: 'renderLeftIcon',
    value: function renderLeftIcon() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { className: [_styles2.default.icon, _styles2.default[this.createIconSize()]].join(' ') },
          _react2.default.createElement('i', { className: [_styles2.default.fa, this.props.icon].join(' ') })
        ),
        _react2.default.createElement(
          'span',
          { style: { lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' } },
          this.props.children
        )
      );
    }
  }, {
    key: 'renderRightIcon',
    value: function renderRightIcon() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { style: { lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' } },
          this.props.children
        ),
        _react2.default.createElement(
          'span',
          { className: [_styles2.default.icon, _styles2.default[this.createIconSize()]].join(' ') },
          _react2.default.createElement('i', { className: [_styles2.default.fa, this.props.icon].join(' ') })
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      return this.props.isIconRight ? this.renderRightIcon() : this.renderLeftIcon();
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return this.props.safeHtml ? _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: this.props.safeHtml } }) : _react2.default.createElement(
        'span',
        null,
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        _extends({}, (0, _helper.getCallbacks)(this.props), {
          style: this.props.style,
          className: this.createClassName()
        }, this.dataProps()),
        this.props.icon ? this.renderIcon() : this.renderBody()
      );
    }
  }]);

  return Button;
}(_dataComponent2.default);

Button.propTypes = {
  children: _react.PropTypes.string,
  className: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  type: _react.PropTypes.string,
  style: _react.PropTypes.object,
  size: _react.PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge']),
  color: _react.PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink']),
  buttonStyle: _react.PropTypes.oneOf(['isOutlined', 'isInverted']),
  state: _react.PropTypes.oneOf(['isLoading', 'isActive', 'isDisabled']),
  delete: _react.PropTypes.bool,
  isIconRight: _react.PropTypes.bool,
  data: _react.PropTypes.array,
  safeHtml: _react.PropTypes.string
};
Button.defaultProps = {
  style: {},
  className: ''
};
exports.default = Button;