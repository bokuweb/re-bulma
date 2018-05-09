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

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'createModalClassName',
    value: function createModalClassName() {
      return [_styles2.default.modal, this.props.isActive ? _styles2.default.isActive : '', this.props.className].join(' ').trim();
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      if (this.props.type === 'image') {
        return _react2.default.createElement(
          'div',
          _extends({ className: _styles2.default.modalContent }, (0, _helper.getCallbacks)(this.props)),
          this.props.children
        );
      }

      if (this.props.type === 'card') {
        return _react2.default.createElement(
          'div',
          { className: [_styles2.default.modalCard, '__re-bulma_modal_card'].join(' ') },
          _react2.default.createElement(
            'header',
            { className: _styles2.default.modalCardHead },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.modalCardTitle },
              this.props.headerContent
            ),
            _react2.default.createElement('button', { className: _styles2.default.delete, onClick: this.props.onCloseRequest })
          ),
          _react2.default.createElement(
            'section',
            { className: _styles2.default.modalCardBody },
            this.props.children
          ),
          this.props.footerContent ? _react2.default.createElement(
            'footer',
            { className: _styles2.default.modalCardFoot },
            this.props.footerContent
          ) : null
        );
      }

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.modalContainer },
        _react2.default.createElement(
          'div',
          _extends({ className: _styles2.default.modalContent }, (0, _helper.getCallbacks)(this.props)),
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.createModalClassName() },
        _react2.default.createElement('div', { className: _styles2.default.modalBackground, onClick: this.props.onCloseRequest }),
        this.renderContent(),
        this.props.showOverlayCloseButton ? _react2.default.createElement('button', { className: _styles2.default.modalClose, onClick: this.props.onCloseRequest }) : null
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  isActive: _propTypes2.default.bool.isRequired,
  onCloseRequest: _propTypes2.default.func,
  showOverlayCloseButton: _propTypes2.default.bool,
  headerContent: _propTypes2.default.node,
  footerContent: _propTypes2.default.node,
  type: _propTypes2.default.oneOf(['card', 'image'])
};
Modal.defaultProps = {
  style: {},
  className: '',
  onCloseRequest: function onCloseRequest() {
    return null;
  }
};
exports.default = Modal;