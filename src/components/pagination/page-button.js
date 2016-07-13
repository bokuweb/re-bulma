import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PageButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
      'isLink',
      'isWhite',
      'isLight',
      'isDark',
      'isBlack',
      'isLink',
    ]),
    target: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.button,
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <a
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    );
  }
}
