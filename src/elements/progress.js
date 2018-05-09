import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

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
      styles[this.props.size],
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <progress {...this.props} className={this.createClassName()} />
    );
  }
}
