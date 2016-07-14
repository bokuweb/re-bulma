import React, { Component, PropTypes } from 'react';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class TabGroup extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    alignment: PropTypes.oneOf([
      'isLeft',
      'isCenter',
      'isRight',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles[this.props.alignment],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ul {...getCallbacks(this.props)} className={this.createClassName()}>
        {this.props.children}
      </ul>
    );
  }
}
