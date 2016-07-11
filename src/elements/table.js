import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Table extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isBordered: PropTypes.bool,
    isStriped: PropTypes.bool,
    isNarrow: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.table,
      this.props.isBordered ? styles.isBordered : '',
      this.props.isStriped ? styles.isStriped : '',
      this.props.isNarrow ? styles.isNarrow : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <table
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </table>
    );
  }
}
