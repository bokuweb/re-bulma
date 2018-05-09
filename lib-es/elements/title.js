var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

export default class Title extends Component {

  createClassName() {
    return [styles.title, styles[this.props.size], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'p',
      _extends({}, this.props, { className: this.createClassName() }),
      this.props.children
    );
  }
}
Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['is1', 'is2', 'is3', 'is4', 'is5', 'is6'])
};
Title.defaultProps = {
  className: ''
};