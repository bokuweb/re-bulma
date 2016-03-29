'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .button:hover {\n    z-index: 2;\n  }\n\n  .button:active,\n  .button:focus {\n    z-index: 3;\n  }\n\n  .button {\n    margin-right: -1px;\n    margin: 0;\n    width: auto;\n    overflow: visible;\n    cursor: pointer;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: white;\n    border: 1px solid #d3d6db;\n    border-radius: 3px;\n    color: #222324;\n    display: inline-block;\n    font-size: 14px;\n    height: 32px;\n    line-height: 24px;\n    padding: 3px 8px;\n    position: relative;\n    vertical-align: top;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding: 3px 10px;\n    text-align: center;\n    white-space: nowrap;\n  }\n\n  .button:hover {\n    border-color: #aeb1b5;\n  }\n\n  .button:active,\n  .button:focus {\n    border-color: #1fc8db;\n    outline: none;\n  }\n'], ['\n  .button:hover {\n    z-index: 2;\n  }\n\n  .button:active,\n  .button:focus {\n    z-index: 3;\n  }\n\n  .button {\n    margin-right: -1px;\n    margin: 0;\n    width: auto;\n    overflow: visible;\n    cursor: pointer;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: white;\n    border: 1px solid #d3d6db;\n    border-radius: 3px;\n    color: #222324;\n    display: inline-block;\n    font-size: 14px;\n    height: 32px;\n    line-height: 24px;\n    padding: 3px 8px;\n    position: relative;\n    vertical-align: top;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding: 3px 10px;\n    text-align: center;\n    white-space: nowrap;\n  }\n\n  .button:hover {\n    border-color: #aeb1b5;\n  }\n\n  .button:active,\n  .button:focus {\n    border-color: #1fc8db;\n    outline: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

var _insertCss = require('insert-css');

var _insertCss2 = _interopRequireDefault(_insertCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styles = (0, _csjs2.default)(_templateObject);

(0, _insertCss2.default)(_csjs2.default.getCss(styles));

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          style: this.props.style,
          className: styles.button,
          onClick: this.props.onClick,
          onTouchStart: this.props.onTouchStart,
          onDoubleClick: this.props.onDoubleClick
        },
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object,
  onClick: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onDoubleClick: _react.PropTypes.func
};
Button.defaultProps = {
  style: {},
  onClick: function onClick() {
    return null;
  },
  onTouchStart: function onTouchStart() {
    return null;
  },
  onDoubleClick: function onDoubleClick() {
    return null;
  }
};
exports.default = Button;