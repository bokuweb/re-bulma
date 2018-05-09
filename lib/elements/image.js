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

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'createClassName',
    value: function createClassName() {
      return [_styles2.default.image, _styles2.default[this.props.size], _styles2.default[this.props.ratio], this.props.className].join(' ').trim();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'figure',
        _extends({}, (0, _helper.getCallbacks)(this.props), {
          style: this.props.style,
          className: this.createClassName()
        }),
        _react2.default.createElement('img', { src: this.props.src, alt: this.props.alt })
      );
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['is16X16', 'is24X24', 'is32X32', 'is48X48', 'is64X64', 'is96X96', 'is128X128']),
  ratio: _propTypes2.default.oneOf(['isSquare', 'is1By1', 'is4By3', 'is3By2', 'is16By9', 'is2By1'])
};
Image.defaultProps = {
  src: '',
  style: {},
  className: ''
};
exports.default = Image;