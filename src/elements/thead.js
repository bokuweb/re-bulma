import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Thead extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <thead
        {...this.props}
        className={this.createClassName()}
      >
        {this.props.children}
      </thead>
    );
  }
}

