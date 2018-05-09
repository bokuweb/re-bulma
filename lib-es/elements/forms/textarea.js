var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';

export default class Textarea extends Component {

  createControlClassName() {
    return [styles.control, styles[this.props.state], this.props.className].join(' ').trim();
  }

  createTextareaClassName() {
    return [styles.textarea, styles[this.props.color]].join(' ').trim();
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
      'p',
      { className: this.createControlClassName(), style: this.props.style },
      React.createElement('textarea', _extends({}, this.props, {
        style: {},
        className: this.createTextareaClassName(),
        disabled: this.props.state === 'isDisabled'
      })),
      this.renderHelp()
    );
  }
}
Textarea.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasIconRight: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger']),
  state: PropTypes.oneOf(['isDisabled']),
  help: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Textarea.defaultProps = {
  style: {},
  className: ''
};