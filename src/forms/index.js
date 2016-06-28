import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export class FormAddon extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
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
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createControlClassName() {
    return [
      styles.control,
      styles.hasAddons,
      this.props.className,
    ].join(' ').trim();
  }

  cloneWithProps() {
    if (React.Children.count(this.props.children) === 1) {
      return this.props.children && React.cloneElement(this.props.children, {
        color: this.props.color,
        hasAddons: true,
      });
    }
    return this.props.children.map((child, i) => (
      React.cloneElement(child, {
        color: this.props.color,
        key: i,
        hasAddons: true,
      })
    ));
  }

  render() {
    return (
      <p
        className={this.createControlClassName()}
        style={this.props.style}
        {...getCallbacks(this.props)}
      >
        {this.props.children && this.cloneWithProps()}
      </p>
    );
  }
}
