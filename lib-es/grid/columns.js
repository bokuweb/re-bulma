var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Columns extends Component {

  createClassName() {
    return [styles.columns, styles[this.props.responsive], this.props.isMultiline ? styles.isMultiline : '', this.props.isGapless ? styles.isGapless : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'div',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }),
      this.props.children
    );
  }
}
Columns.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  responsive: PropTypes.oneOf(['isMobile', 'isDesktop', 'isTablet']),
  isMultiline: PropTypes.bool,
  isGapless: PropTypes.bool
};