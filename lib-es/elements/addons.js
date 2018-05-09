var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Addons extends Component {

  createControlClassName() {
    return [styles.control, styles.hasAddons, this.props.className, this.props.hasAddonsCentered ? styles.hasAddonsCentered : '', this.props.hasAddonsRight ? styles.hasAddonsRight : ''].join(' ').trim();
  }

  cloneWithProps() {
    if (React.Children.count(this.props.children) === 1) {
      return this.props.children && React.cloneElement(this.props.children, {
        color: this.props.color,
        hasAddons: true
      });
    }
    return this.props.children.map((child, i) => React.cloneElement(child, {
      color: this.props.color,
      key: i,
      hasAddons: true
    }));
  }

  renderHelp() {
    if (!this.props.help) return null;
    return React.createElement(
      'span',
      { className: [styles.help, styles[this.props.help.color]].join(' ') },
      this.props.help.text
    );
  }

  render() {
    return React.createElement(
      'span',
      null,
      React.createElement(
        'p',
        _extends({
          className: this.createControlClassName(),
          style: this.props.style
        }, getCallbacks(this.props)),
        this.props.children && this.cloneWithProps()
      ),
      this.renderHelp()
    );
  }
}
Addons.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink']),
  help: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  }),
  hasAddonsCentered: PropTypes.bool,
  hasAddonsRight: PropTypes.bool
};
Addons.defaultProps = {
  style: {},
  className: ''
};