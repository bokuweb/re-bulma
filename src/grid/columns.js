import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Columns extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    responsive: PropTypes.oneOf([
      'isMobile',
      'isDesktop',
      'isTablet',
    ]),
    isMultiline: PropTypes.bool,
    isGapless: PropTypes.bool,
  };

  createClassName() {
    return [
      styles.columns,
      styles[this.props.responsive],
      this.props.isMultiline ? styles.isMultiline : '',
      this.props.isGapless ? styles.isGapless : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}
