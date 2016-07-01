import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Label extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.label,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <label {...this.props} className={this.createClassName()}>
        {this.props.children}
      </label>
    );
  }
}
