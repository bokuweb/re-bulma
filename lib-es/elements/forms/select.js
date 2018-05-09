var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Select extends Component {

  createControlClassName() {
    return [styles.control, styles[this.props.state], this.props.className].join(' ').trim();
  }

  createSelectClassName() {
    return [styles.select, styles[this.props.size]].join(' ').trim();
  }

  renderHelp() {
    if (!this.props.help) return null;
    return React.createElement(
      'span',
      { className: [styles.help, styles[this.props.help.color]].join(' ') },
      this.props.help.text
    );
  }

  renderSelect() {
    return React.createElement(
      'span',
      { className: this.createSelectClassName(), style: this.props.style },
      React.createElement(
        'select',
        _extends({}, getCallbacks(this.props), {
          disabled: this.props.state === 'isDisabled',
          defaultValue: this.props.defaultValue,
          value: this.props.value
        }),
        this.props.children
      ),
      this.renderHelp()
    );
  }

  render() {
    if (this.props.hasAddons) {
      return this.renderSelect();
    }
    return React.createElement(
      'p',
      { className: this.createControlClassName(), style: this.props.style },
      this.renderSelect()
    );
  }
}
Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  hasAddons: PropTypes.bool,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge']),
  state: PropTypes.oneOf(['isDisabled']),
  help: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Select.defaultProps = {
  style: {},
  className: '',
  isLoading: false,
  isActive: false
};