'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .columns:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: 769px) {\n    .columns {\n      display: flex;\n      width: 100%;\n    }\n  }\n\n  .columns.is-gapless > .column + .column {\n    margin: 0;\n  }\n\n  .columns.is-vcentered {\n    align-items: center;\n  }\n\n  @media screen and (min-width: 769px) {\n    .columns.is-grid {\n      flex-wrap: wrap;\n    }\n    .columns.is-grid > .column {\n      flex-basis: 33.3333%;\n      max-width: 33.3333%;\n      padding: 10px;\n      width: 33.3333%;\n    }\n    .columns.is-grid > .column + .column {\n      margin-left: 0;\n    }\n  }\n'], ['\n  .columns:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  @media screen and (min-width: 769px) {\n    .columns {\n      display: flex;\n      width: 100%;\n    }\n  }\n\n  .columns.is-gapless > .column + .column {\n    margin: 0;\n  }\n\n  .columns.is-vcentered {\n    align-items: center;\n  }\n\n  @media screen and (min-width: 769px) {\n    .columns.is-grid {\n      flex-wrap: wrap;\n    }\n    .columns.is-grid > .column {\n      flex-basis: 33.3333%;\n      max-width: 33.3333%;\n      padding: 10px;\n      width: 33.3333%;\n    }\n    .columns.is-grid > .column + .column {\n      margin-left: 0;\n    }\n  }\n']);

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

var Columns = function (_Component) {
  _inherits(Columns, _Component);

  function Columns() {
    _classCallCheck(this, Columns);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Columns).apply(this, arguments));
  }

  _createClass(Columns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.columns },
        this.props.children
      );
    }
  }]);

  return Columns;
}(_react.Component);

Columns.propTypes = {
  children: _react.PropTypes.any
};
exports.default = Columns;