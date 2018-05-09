import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class Tab extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <li
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        <span>
          {this.props.children}
        </span>
      </li>
    );
  }
}
