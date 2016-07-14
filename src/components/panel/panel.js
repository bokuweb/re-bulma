import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  createClassName() {
    return [
      styles.panel,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <nav
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </nav>
    );
  }
}
