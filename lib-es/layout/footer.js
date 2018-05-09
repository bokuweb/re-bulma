var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Footer extends Component {

  createClassName() {
    return [styles.footer, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'footer',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Footer.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};
Footer.defaultProps = {
  style: {},
  className: ''
};