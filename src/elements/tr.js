import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Tr extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tr
        {...this.props}
        className={this.createClassName()}
      >
        {this.props.children}
      </tr>
    );
  }
}
