var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Tag extends Component {

  createClassName() {
    return [styles.tag, styles[this.props.size], styles[this.props.color], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'span',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Tag.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge']),
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isDark'])
};
Tag.defaultProps = {
  className: '',
  style: {}
};