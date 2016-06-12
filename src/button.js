import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/button';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    customStyle: PropTypes.object,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTouchStart: PropTypes.func,
    onDoubleClick: PropTypes.func,
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
    ]),
    style: PropTypes.oneOf([
      'isOutlined',
      'isInverted',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
      'isActive',
      'isDisabled',
    ]),
  };

  static defaultProps = {
    style: {},
    onClick: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onTouchStart: () => null,
    onDoubleClick: () => null,
    className: '',
    isLoading: false,
    isActive: false,
  };

  createClassName() {
    return [
      styles.button,
      styles[kebabCase(this.props.size)],
      styles[kebabCase(this.props.type)],
      styles[kebabCase(this.props.style)],
      styles[kebabCase(this.props.state)],
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
        style={this.props.customStyle}
        className={this.createClassName()}
        onClick={this.props.onClick}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onTouchStart={this.props.onTouchStart}
        onDoubleClick={this.props.onDoubleClick}
        type={this.props.type}
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
