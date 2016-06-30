import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.box,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...this.props} className={this.createClassName()} >
        {this.props.children}
      </div>
    );
  }
}
