import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class ControlLabel extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createControlClassName() {
    return [
      styles.controlLabel,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        className={this.createControlClassName()}
        style={this.props.style}
        {...getCallbacks(this.props)}
      >
        <p className={styles.label}>{this.props.children}</p>
      </div>
    );
  }
}
