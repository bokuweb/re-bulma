var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';
import DataComponent from '../dataComponent';

export default class Button extends DataComponent {

  createClassName() {
    return [styles.button, styles[this.props.size], styles[this.props.color], styles[this.props.buttonStyle], styles[this.props.state], this.props.delete ? styles.delete : '', this.props.className].join(' ').trim();
  }

  createIconSize() {
    if (this.props.size === 'isLarge') return 'isMedium';
    if (this.props.size === 'isSmall') return 'isSmall';
    return '';
  }

  renderLeftIcon() {
    return React.createElement(
      'span',
      null,
      React.createElement(
        'span',
        { className: [styles.icon, styles[this.createIconSize()]].join(' ') },
        React.createElement('i', { className: [styles.fa, this.props.icon].join(' ') })
      ),
      React.createElement(
        'span',
        { style: { lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' } },
        this.props.children
      )
    );
  }

  renderRightIcon() {
    return React.createElement(
      'span',
      null,
      React.createElement(
        'span',
        { style: { lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' } },
        this.props.children
      ),
      React.createElement(
        'span',
        { className: [styles.icon, styles[this.createIconSize()]].join(' ') },
        React.createElement('i', { className: [styles.fa, this.props.icon].join(' ') })
      )
    );
  }

  renderIcon() {
    return this.props.isIconRight ? this.renderRightIcon() : this.renderLeftIcon();
  }

  renderBody() {
    return this.props.safeHtml ? React.createElement('span', { dangerouslySetInnerHTML: { __html: this.props.safeHtml } }) : React.createElement(
      'span',
      null,
      this.props.children
    );
  }

  render() {
    return React.createElement(
      'button',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }, this.dataProps()),
      this.props.icon ? this.renderIcon() : this.renderBody()
    );
  }
}
Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge']),
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink']),
  buttonStyle: PropTypes.oneOf(['isOutlined', 'isInverted']),
  state: PropTypes.oneOf(['isLoading', 'isActive', 'isDisabled']),
  delete: PropTypes.bool,
  isIconRight: PropTypes.bool,
  data: PropTypes.array,
  safeHtml: PropTypes.string
};
Button.defaultProps = {
  style: {},
  className: ''
};