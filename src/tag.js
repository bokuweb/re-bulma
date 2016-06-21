import React, { Component, PropTypes } from 'react';
import kebabCase from 'lodash.kebabCase';
import styles from '../build/styles';

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
      'isDark',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.tag,
      styles[kebabCase(this.props.size)],
      styles[kebabCase(this.props.color)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span {...this.props} className={this.createClassName()}>
        {this.props.children}
      </span>
    );
  }
}
