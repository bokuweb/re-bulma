import React, { Component, PropTypes } from 'react';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Th extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.th,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <th
        {...getCallbacks(this.props)}
        className={this.createClassName()}
      >
        {this.props.children}
      </th>
    );
  }
}

