var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Notification extends Component {

  createClassName() {
    return [styles.notification, styles[this.props.color], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'div',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.enableCloseButton ? React.createElement('button', _extends({ className: styles.delete }, this.props.closeButtonProps)) : null,
      this.props.children
    );
  }
}
Notification.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  closeButtonProps: PropTypes.object,
  enableCloseButton: PropTypes.bool,
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
};
Notification.defaultProps = {
  enableCloseButton: false,
  style: {},
  className: ''
};