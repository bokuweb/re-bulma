var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class Tab extends Component {

  createClassName() {
    return [this.props.isActive ? styles.isActive : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'li',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      React.createElement(
        'span',
        null,
        this.props.children
      )
    );
  }
}
Tab.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.object
};
Tab.defaultProps = {
  className: ''
};