var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Modal extends Component {

  createModalClassName() {
    return [styles.modal, this.props.isActive ? styles.isActive : '', this.props.className].join(' ').trim();
  }

  renderContent() {
    if (this.props.type === 'image') {
      return React.createElement(
        'div',
        _extends({ className: styles.modalContent }, getCallbacks(this.props)),
        this.props.children
      );
    }

    if (this.props.type === 'card') {
      return React.createElement(
        'div',
        { className: [styles.modalCard, '__re-bulma_modal_card'].join(' ') },
        React.createElement(
          'header',
          { className: styles.modalCardHead },
          React.createElement(
            'div',
            { className: styles.modalCardTitle },
            this.props.headerContent
          ),
          React.createElement('button', { className: styles.delete, onClick: this.props.onCloseRequest })
        ),
        React.createElement(
          'section',
          { className: styles.modalCardBody },
          this.props.children
        ),
        this.props.footerContent ? React.createElement(
          'footer',
          { className: styles.modalCardFoot },
          this.props.footerContent
        ) : null
      );
    }

    return React.createElement(
      'div',
      { className: styles.modalContainer },
      React.createElement(
        'div',
        _extends({ className: styles.modalContent }, getCallbacks(this.props)),
        this.props.children
      )
    );
  }
  render() {
    return React.createElement(
      'div',
      { className: this.createModalClassName() },
      React.createElement('div', { className: styles.modalBackground, onClick: this.props.onCloseRequest }),
      this.renderContent(),
      this.props.showOverlayCloseButton ? React.createElement('button', { className: styles.modalClose, onClick: this.props.onCloseRequest }) : null
    );
  }
}
Modal.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func,
  showOverlayCloseButton: PropTypes.bool,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
  type: PropTypes.oneOf(['card', 'image'])
};
Modal.defaultProps = {
  style: {},
  className: '',
  onCloseRequest: () => null
};