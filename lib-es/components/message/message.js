var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Message extends Component {

  createClassName() {
    return [styles.message, styles[this.props.color], this.props.className].join(' ').trim();
  }

  renderHeader() {
    return React.createElement(
      'div',
      { className: styles.messageHeader },
      this.props.header
    );
  }

  render() {
    return React.createElement(
      'article',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.header === '' ? null : this.renderHeader(),
      React.createElement(
        'div',
        { className: styles.messageBody },
        this.props.children
      )
    );
  }
}
Message.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  header: PropTypes.any,
  style: PropTypes.object,
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink'])
};
Message.defaultProps = {
  className: '',
  style: {},
  header: ''
};