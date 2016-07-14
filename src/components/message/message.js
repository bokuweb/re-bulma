import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Message extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    header: PropTypes.any,
    style: PropTypes.onbject,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
      'isLink',
      'isWhite',
      'isLight',
      'isDark',
      'isBlack',
      'isLink',
    ]),
  };

  static defaultProps = {
    className: '',
    style: {},
    header: '',
  };

  createClassName() {
    return [
      styles.message,
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  renderHeader() {
    return (
      <div className={styles.messageHeader}>
        {this.props.header}
      </div>
    );
  }

  render() {
    return (
      <article
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.header === '' ? null : this.renderHeader()}
        <div className={styles.messageBody}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
