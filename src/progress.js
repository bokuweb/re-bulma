import React, { Component, PropTypes } from 'react';
import kebabCase from 'lodash.kebabCase';
import styles from '../build/styles';

export default class Progress extends Component {
  static propTypes = {
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
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.progress,
      styles[kebabCase(this.props.size)],
      styles[kebabCase(this.props.color)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <progress {...this.props} className={this.createClassName()} />
    );
  }
}
