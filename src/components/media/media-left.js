import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class MediaLeft extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.mediaLeft,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <figure
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </figure>
    );
  }
}
