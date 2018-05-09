import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from './../../helper/helper';

export default class Nav extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    hasShadow: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.nav,
      this.props.hasShadow ? styles.hasShadow : '',
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

