var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Hero extends Component {

  createClassName() {
    return [styles.hero, this.props.isBold ? styles.isBold : '', styles[this.props.size], styles[this.props.color], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'section',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }),
      this.props.children
    );
  }
}
Hero.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  isBold: PropTypes.bool,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge', 'isFullheight']),
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink'])
};
Hero.defaultProps = {
  style: {},
  className: ''
};