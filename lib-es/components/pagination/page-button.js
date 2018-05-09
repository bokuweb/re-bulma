var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PageButton extends Component {

  createClassName() {
    return [styles.button, styles[this.props.color], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'a',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName(),
        href: this.props.href,
        target: this.props.target
      }),
      this.props.children
    );
  }
}
PageButton.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink']),
  target: PropTypes.string
};
PageButton.defaultProps = {
  style: {},
  className: ''
};