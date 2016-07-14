import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PanelBlock extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    icon: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  createClassName() {
    return [
      styles.panelBlock,
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  renderIcon() {
    return (
      <span className={styles.panelIcon}>
        <i className={[styles.fa, this.props.icon].join(' ')} />
      </span>
    );
  }

  render() {
    return (
      <span
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.icon ? this.renderIcon() : null}
        {this.props.children}
      </span>
    );
  }
}
