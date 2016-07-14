import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class MenuLink extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <a
        {...getCallbacks(this.props)}
        href={this.props.href}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </a>
    );
  }
}
