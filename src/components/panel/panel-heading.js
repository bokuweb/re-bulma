import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PanelHeading extends Component {
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
      styles.panelHeading,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </p>
    );
  }
}
