var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Section extends Component {

  createClassName() {
    return [styles.section, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'section',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Section.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};
Section.defaultProps = {
  style: {},
  className: ''
};