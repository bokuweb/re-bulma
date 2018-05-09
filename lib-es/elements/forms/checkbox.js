import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';

export default class Checkbox extends Component {

  createLabelClassName() {
    return [styles.checkbox, styles[this.props.state]].join(' ').trim();
  }

  createControlClassName() {
    return [styles.control, this.props.className].join(' ').trim();
  }

  renderHelp() {
    if (!this.props.help) return null;
    return React.createElement(
      'span',
      { className: [styles.help, styles[this.props.help.color]].join(' ') },
      this.props.help.text
    );
  }

  renderForm() {
    return React.createElement(
      'label',
      { className: this.createLabelClassName() },
      React.createElement('input', { type: 'checkbox' }),
      this.props.children
    );
  }

  render() {
    if (this.props.hasAddons) {
      return this.renderForm();
    }
    return React.createElement(
      'p',
      { className: this.createControlClassName(), style: this.props.style },
      this.renderForm()
    );
  }
}
Checkbox.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasIconRight: PropTypes.bool,
  icon: PropTypes.string,
  hasAddons: PropTypes.bool,
  state: PropTypes.oneOf(['isDisabled']),
  help: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  })
};
Checkbox.defaultProps = {
  className: ''
};