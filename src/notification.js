import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';
import kebabCase from 'lodash.kebabCase';
import { getCallbacks } from './helper/helper';

export default class Notification extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    closeButtonProps: PropTypes.object,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
  };

  static defaultProps = {
    src: '',
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.notification,
      styles[kebabCase(this.props.color)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...getCallbacks(this.props)} className={this.createClassName()}>
        <button className={styles.delete} {...this.props.closeButtonProps} />
        {this.props.children}
      </div>
    );
  }
}
