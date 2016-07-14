import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class NavToggle extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.navToggle,
      this.props.isActive ? styles.isActive : '',
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
        <span />
        <span />
        <span />
      </span>
    );
  }
}
