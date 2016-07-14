import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class NavItem extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isTab: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.navItem,
      this.props.isActive ? styles.isActive : '',
      this.props.isTab ? styles.isTab : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </span>
    );
  }
}
