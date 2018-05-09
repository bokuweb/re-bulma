var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class FormHorizontal extends Component {

  createControlClassName() {
    return [styles.control, styles.isHorizontal, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'div',
      _extends({
        className: this.createControlClassName(),
        style: this.props.style
      }, getCallbacks(this.props)),
      this.props.children
    );
  }
}
FormHorizontal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};
FormHorizontal.defaultProps = {
  style: {},
  className: ''
};