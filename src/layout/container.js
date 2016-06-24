import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    isFluid: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.container,
      this.props.isFluid ? styles['is-fluid'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...this.props} className={this.createClassName()}>
        {this.props.children}
      </div>
    );
  }
}
