import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Table extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isBordered: PropTypes.bool,
    isStriped: PropTypes.bool,
    isNarrow: PropTypes.bool,
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
        {...this.props}
        className={this.createClassName()}
      >
        {this.props.children}
      </table>
    );
  }
}
