import React, { Component, PropTypes } from 'react';
import kebabCase from 'lodash.kebabCase';
import styles from '../build/styles';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
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
    buttonStyle: PropTypes.oneOf([
      'isOutlined',
      'isInverted',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
      'isActive',
      'isDisabled',
    ]),
    delete: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    isLoading: false,
    isActive: false,
  };

  createClassName() {
    return [
      styles.button,
      styles[kebabCase(this.props.size)],
      styles[kebabCase(this.props.color)],
      styles[kebabCase(this.props.buttonStyle)],
      styles[kebabCase(this.props.state)],
      this.props.delete ? styles.delete : '',
      this.props.className,
    ].join(' ').trim();
  }

  createIconSize() {
    if (this.props.size === 'isLarge') return 'is-medium';
    if (this.props.size === 'isSmall') return 'is-small';
    return '';
  }

  render() {
    
    return (
      <button
        {...this.props}
        className={this.createClassName()}
      >
        {
          this.props.icon
            ? (
              <span>
                <span className={[styles.icon, styles[this.createIconSize()]].join(' ')}>
                  <i className={[styles.fa, this.props.icon].join(' ')} />
                </span>
                <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
                  {this.props.children}
                </span>
              </span>
            )
            : this.props.children
        }
      </button>
    );
  }
}
