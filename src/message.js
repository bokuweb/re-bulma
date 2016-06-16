import React, { Component, PropTypes } from 'react';
import kebabCase from 'lodash.kebabCase';
import Styles from './styles';

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
    const styles = new Styles().getStyles();
    return [
      styles.message,
      styles[kebabCase(this.props.color)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    const styles = new Styles().getStyles();
    return (
      <article {...this.props} className={this.createClassName()} >
        {
          this.props.header === ''
            ? null
            : (
              <div className={styles['message-header']}>
                {this.props.header}
              </div>
            )
        }
        <div className={styles['message-body']}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
