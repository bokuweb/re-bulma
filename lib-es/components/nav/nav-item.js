var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';
import DataComponent from '../../dataComponent';

export default class NavItem extends DataComponent {

  createClassName() {
    return [styles.navItem, this.props.isActive ? styles.isActive : '', this.props.isTab ? styles.isTab : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'span',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }, this.dataProps()),
      this.props.children
    );
  }
}
NavItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isTab: PropTypes.bool,
  data: PropTypes.array
};
NavItem.defaultProps = {
  style: {},
  className: ''
};