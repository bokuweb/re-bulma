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

var Tile = function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'createClassName',
    value: function createClassName() {
      return [_styles2.default.tile, _styles2.default[this.props.size], _styles2.default[this.props.context], this.props.isVertical ? _styles2.default.isVertical : '', this.props.isDesktop ? _styles2.default.isDesktop : '', this.props.className].join(' ').trim();
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

  return Tile;
}(_react.Component);

Tile.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  context: _propTypes2.default.oneOf(['isAncestor', 'isParent', 'isChild']),
  isVertical: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['is1', 'is2', 'is3', 'is4', 'is5', 'is6', 'is7', 'is8', 'is9', 'is10', 'is11', 'is12']),
  isDesktop: _propTypes2.default.bool
};
Tile.defaultProps = {
  className: '',
  style: {}
};
exports.default = Tile;