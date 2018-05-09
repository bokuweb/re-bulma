var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Tbody extends Component {

  createClassName() {
    return [styles.tr, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'tbody',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Tbody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
Tbody.defaultProps = {
  className: ''
};