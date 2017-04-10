import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
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
    isIconRight: PropTypes.bool,
    data: PropTypes.array,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.button,
      styles[this.props.size],
      styles[this.props.color],
      styles[this.props.buttonStyle],
      styles[this.props.state],
      this.props.delete ? styles.delete : '',
      this.props.className,
    ].join(' ').trim();
  }

  createIconSize() {
    if (this.props.size === 'isLarge') return 'isMedium';
    if (this.props.size === 'isSmall') return 'isSmall';
    return '';
  }

  renderLeftIcon() {
    return (
      <span>
        <span className={[styles.icon, styles[this.createIconSize()]].join(' ')}>
          <i className={[styles.fa, this.props.icon].join(' ')} />
        </span>
        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
          {this.props.children}
        </span>
      </span>
    );
  }

  renderRightIcon() {
    return (
      <span>
        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
          {this.props.children}
        </span>
        <span className={[styles.icon, styles[this.createIconSize()]].join(' ')}>
          <i className={[styles.fa, this.props.icon].join(' ')} />
        </span>
      </span>
    );
  }

  renderIcon() {
    return this.props.isIconRight
      ? this.renderRightIcon()
      : this.renderLeftIcon();
  }

  renderDataAttributes() {
    if (this.props.data && this.props.data.length>0) {
      return this.props.data.map(d => {
        return "data-"+d.name + " = " + d.value;}
      ).join(" ");
    } else
      return null;
  }

  render() {
    const extraProps = {};
    if (this.props.data && this.props.data.length>0) {
      this.props.data.map(d => {
        extraProps["data-" + encodeURIComponent(d.name)] = encodeURIComponent(d.value);
      })
    }
    return (
      <button
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
        {...extraProps}
      >
        <span>
        {
          this.props.icon
            ? this.renderIcon()
            : this.props.children
        }
        </span>
      </button>
    );
  }
}
