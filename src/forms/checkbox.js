import React, { Component, PropTypes } from 'react';
import Styles from '../styles';
import kebabCase from 'lodash.kebabCase';

export default class Checkbox extends Component {
  static propTypes = {
    children: PropTypes.any,
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
    const styles = new Styles().getStyles();
    return [
      styles.checkbox,
      styles[kebabCase(this.props.state)],
    ].join(' ').trim();
  }

  createControlClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.control,
      this.props.className,
    ].join(' ').trim();
  }

  renderHelp() {
    if (!this.props.help) return null;
    const styles = new Styles().getStyles();
    return (
      <span className={[styles.help, styles[kebabCase(this.props.help.color)]].join(' ')}>
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
