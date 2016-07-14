import React, { Component, PropTypes } from 'react';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Tr extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
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
      <tr
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </tr>
    );
  }
}
