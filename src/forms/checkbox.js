import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from '../styles/form';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Checkbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onTouchStart: PropTypes.func,
    onDoubleClick: PropTypes.func,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
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
      styles[kebabCase(this.props.state)],
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
      <p className={this.createControlClassName()} style={this.props.customStyle}>
        {this.renderForm()}
      </p>
    );
  }
}
