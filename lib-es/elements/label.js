var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

export default class Label extends Component {

  createClassName() {
    return [styles.label, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'label',
      _extends({}, this.props, { className: this.createClassName() }),
      this.props.children
    );
  }
}
Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
Label.defaultProps = {
  className: ''
};