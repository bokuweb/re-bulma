import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Tfoot extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.tfoot,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tfoot
        {...this.props}
        className={this.createClassName()}
      >
        {this.props.children}
      </tfoot>
    );
  }
}
