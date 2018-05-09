var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class NavGroup extends Component {

  createClassName() {
    const align = this.props.align && this.props.align.substring(0, 1).toUpperCase() + this.props.align.substring(1);
    return [styles[`nav${align}`], this.props.isMenu ? styles.navMenu : '', this.props.className].join(' ').trim();
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
NavGroup.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  isMenu: PropTypes.bool
};
NavGroup.defaultProps = {
  style: {},
  className: ''
};