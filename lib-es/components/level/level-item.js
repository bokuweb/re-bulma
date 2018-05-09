var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class LevelItem extends Component {

  createClassName() {
    return [styles.levelItem, this.props.hasTextCentered ? styles.hasTextCentered : '', this.props.className].join(' ').trim();
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
LevelItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  hasTextCentered: PropTypes.bool
};
LevelItem.defaultProps = {
  style: {},
  className: ''
};