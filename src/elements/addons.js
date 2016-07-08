import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Addons extends Component {
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
    help: PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf([
        'isPrimary',
        'isInfo',
        'isSuccess',
        'isWarning',
        'isDanger',
      ]),
    }),
    hasAddonsCentered: PropTypes.bool,
    hasAddonsRight: PropTypes.bool,
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
      this.props.hasAddonsCentered ? styles.hasAddonsCentered : '',
      this.props.hasAddonsRight ? styles.hasAddonsRight : '',
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

  renderHelp() {
    if (!this.props.help) return null;
    return (
      <span className={[styles.help, styles[this.props.help.color]].join(' ')}>
        {this.props.help.text}
      </span>
    );
  }

  render() {
    return (
      <span>
        <p
          className={this.createControlClassName()}
          style={this.props.style}
          {...getCallbacks(this.props)}
        >
          {this.props.children && this.cloneWithProps()}
        </p>
        {this.renderHelp()}
      </span>
    );
  }
}
