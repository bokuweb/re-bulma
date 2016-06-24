import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';

export default class Message extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    header: PropTypes.any,
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
    header: '',
  };

  createClassName() {
    return [
      styles.message,
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <article {...this.props} className={this.createClassName()} >
        {
          this.props.header === ''
            ? null
            : (
              <div className={styles.messageHeader}>
                {this.props.header}
              </div>
            )
        }
        <div className={styles.messageBody}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
