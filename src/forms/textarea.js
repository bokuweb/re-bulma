import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from '../styles/form';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Textarea extends Component {
  static propTypes = {
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
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
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
    style: {},
    className: '',
    isLoading: false,
    isActive: false,
  };

  createControlClassName() {
    return [
      styles.control,
      styles[kebabCase(this.props.state)],
      this.props.className,
    ].join(' ').trim();
  }

  createTextareaClassName() {
    return [
      styles.textarea,
      styles[kebabCase(this.props.color)],
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

  render() {
    return (
      <p className={this.createControlClassName()} style={this.props.customStyle}>
        <textarea
          className={this.createTextareaClassName()}
          type={this.props.type}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          value={this.props.value}
          onClick={this.props.onClick}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onTouchStart={this.props.onTouchStart}
          onDoubleClick={this.props.onDoubleClick}
          onChange={this.props.onChange}
          disabled={this.props.state === 'isDisabled'}
        />
        {this.renderHelp()}
      </p>
    );
  }
}
