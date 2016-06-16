import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from '../styles/form';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Textarea extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.string,
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
      <p className={this.createControlClassName()} style={this.props.style}>
        <textarea
          {...this.props}
          style={{}}
          className={this.createTextareaClassName()}
          disabled={this.props.state === 'isDisabled'}
        />
        {this.renderHelp()}
      </p>
    );
  }
}
