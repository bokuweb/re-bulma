import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';

export default class Checkbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    icon: PropTypes.string,
    hasAddons: PropTypes.bool,
    state: PropTypes.oneOf([
      'isDisabled',
    ]),
    help: PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf([
        'isPrimary',
        'isInfo',
        'isSuccess',
        'isWarning',
        'isDanger',
      ]),
    }),
  };

  static defaultProps = {
    className: '',
  };

  createLabelClassName() {
    return [
      styles.checkbox,
      styles[this.props.state],
    ].join(' ').trim();
  }

  createControlClassName() {
    return [
      styles.control,
      this.props.className,
    ].join(' ').trim();
  }

  renderHelp() {
    if (!this.props.help) return null;
    return (
      <span className={[styles.help, styles[this.props.help.color]].join(' ')}>
        {this.props.help.text}
      </span>
    );
  }

  renderForm() {
    return (
      <label className={this.createLabelClassName()}>
        <input type="checkbox" />
        {this.props.children}
      </label>
    );
  }

  render() {
    if (this.props.hasAddons) {
      return this.renderForm();
    }
    return (
      <p className={this.createControlClassName()} style={this.props.style}>
        {this.renderForm()}
      </p>
    );
  }
}
