import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PanelTabs extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  createClassName() {
    return [
      styles.panelTabs,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        style={this.props.style}
        {...getCallbacks(this.props)}
        className={this.createClassName()}
      >
        {this.props.children}
      </p>
    );
  }
}
