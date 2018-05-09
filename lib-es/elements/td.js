var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Td extends Component {

  createClassName() {
    return [styles.td, this.props.isIcon ? styles.isIcon : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'td',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Td.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isIcon: PropTypes.bool,
  style: PropTypes.object
};
Td.defaultProps = {
  className: ''
};