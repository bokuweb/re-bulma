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

var Column = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'createClassName',
    value: function createClassName() {
      return [_styles2.default.column, _styles2.default[this.props.size], _styles2.default[this.props.offset], this.props.className].join(' ').trim();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, (0, _helper.getCallbacks)(this.props), {
          className: this.createClassName(),
          style: this.props.style
        }),
        this.props.children
      );
    }
  }]);

  return Column;
}(_react.Component);

Column.propTypes = {
  children: _propTypes2.default.any,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  isMultiline: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['is1', 'is2', 'is3', 'is4', 'is5', 'is6', 'is7', 'is8', 'is9', 'is10', 'is11', 'is12', 'isThreeQuarters', 'isTwoThirds', 'isHalf', 'isOneThird', 'isOneQuarter', 'isThreeQuartersMobile', 'isTwoThirdsMobile', 'isHalfMobile', 'isOneThirdMobile', 'isOneQuarterMobile', 'isThreeQuartersTablet', 'isTwoThirdsTablet', 'isHalfTablet', 'isOneThirdTablet', 'isOneQuarterTablet', 'isThreeQuartersDesktop', 'isTwoThirdsDesktop', 'isHalfDesktop', 'isOneThirdDesktop', 'isOneQuarterDesktop', 'isThreeQuartersWidescreen', 'isTwoThirdsWidescreen', 'isHalfWidescreen', 'isOneThirdWidescreen', 'isOneQuarterWidescreen', 'isNarrow', 'isNarrowMobile', 'isNarrowTablet', 'isNarrowDesktop', 'isNarrowWidescreen', 'isFull', 'isFullMobile', 'isFullTablet', 'isFullDesktop', 'isFullWidescreen']),
  offset: _propTypes2.default.oneOf(['isOffsetThreeQuarters', 'isOffsetTwoThirds', 'isOffsetHalf', 'isOffsetOneThird', 'isOffsetOneQuarter', 'isOffset1', 'isOffset2', 'isOffset3', 'isOffset4', 'isOffset5', 'isOffset6', 'isOffset7', 'isOffset8', 'isOffset9', 'isOffset10', 'isOffset11', 'isOffset12', 'isOffset1Mobile', 'isOffset2Mobile', 'isOffset3Mobile', 'isOffset4Mobile', 'isOffset5Mobile', 'isOffset6Mobile', 'isOffset7Mobile', 'isOffset8Mobile', 'isOffset9Mobile', 'isOffset10Mobile', 'isOffset11Mobile', 'isOffset12Mobile', 'isOffset1Tablet', 'isOffset2Tablet', 'isOffset3Tablet', 'isOffset4Tablet', 'isOffset5Tablet', 'isOffset6Tablet', 'isOffset7Tablet', 'isOffset8Tablet', 'isOffset9Tablet', 'isOffset10Tablet', 'isOffset11Tablet', 'isOffset12Tablet', 'isOffset1Desktop', 'isOffset2Desktop', 'isOffset3Desktop', 'isOffset4Desktop', 'isOffset5Desktop', 'isOffset6Desktop', 'isOffset7Desktop', 'isOffset8Desktop', 'isOffset9Desktop', 'isOffset10Desktop', 'isOffset11Desktop', 'isOffset12Desktop', 'isOffset1Widescreen', 'isOffset2Widescreen', 'isOffset3Widescreen', 'isOffset4Widescreen', 'isOffset5Widescreen', 'isOffset6Widescreen', 'isOffset7Widescreen', 'isOffset8Widescreen', 'isOffset9Widescreen', 'isOffset10Widescreen', 'isOffset11Widescreen', 'isOffset12Widescreen'])
};
exports.default = Column;