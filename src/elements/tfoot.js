import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Tfoot extends Component {
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
      styles.tfoot,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tfoot
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </tfoot>
    );
  }
}
