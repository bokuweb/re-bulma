import React, { Component, PropTypes } from 'react';
import { getCallbacks } from '../helper/helper';
import styles from '../../build/styles';

export default class Td extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isIcon: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.td,
      this.props.isIcon ? styles.isIcon : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <td
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </td>
    );
  }
}

