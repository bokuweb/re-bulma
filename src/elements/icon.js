import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Icon extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.icon,
      styles[this.props.size],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span {...this.props} className={this.createClassName()}>
        <i className={[styles.fa, this.props.icon].join(' ').trim()} />
      </span>
    );
  }
}
