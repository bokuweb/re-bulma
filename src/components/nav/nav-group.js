import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class NavGroup extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    isMenu: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const align = this.props.align &&
            this.props.align.substring(0, 1).toUpperCase() + this.props.align.substring(1);
    return [
      styles[`nav${align}`],
      this.props.isMenu ? styles.navMenu : '',
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
