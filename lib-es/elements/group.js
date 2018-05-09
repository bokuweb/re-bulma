var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Group extends Component {

  createControlClassName() {
    return [styles.control, styles.isGrouped, this.props.className].join(' ').trim();
  }

  cloneWithProps() {
    if (React.Children.count(this.props.children) < 2) {
      return React.createElement(
        'p',
        { className: styles.control },
        this.props.children && React.cloneElement(this.props.children, {
          hasAddons: true
        })
      );
    }
    return this.props.children.map((child, i) => React.createElement(
      'p',
      { key: i, className: `${styles.control} ${child.props.isExpanded ? styles.isExpanded : ''}` },
      React.cloneElement(child, { hasAddons: true })
    ));
  }

  render() {
    return React.createElement(
      'div',
      _extends({
        className: this.createControlClassName(),
        style: this.props.style
      }, getCallbacks(this.props)),
      this.cloneWithProps()
    );
  }
}
Group.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};
Group.defaultProps = {
  style: {},
  className: ''
};