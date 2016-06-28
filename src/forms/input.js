import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    style: PropTypes.object,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    hasAddons: PropTypes.bool,
    readOnly: PropTypes.bool,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
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
      styles[this.props.state],
      this.props.icon ? styles.hasIcon : '',
      // Add has-icon-left class because can not user not: selector( csjs bug )
      this.props.hasIconRight ? styles.hasIconRight : styles.hasIconLeft,
      this.props.className,
    ].join(' ').trim();
  }

  createInputClassName() {
    return [
      styles.input,
      styles[this.props.color],
      styles[this.props.size],
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

  renderInput() {
    return (
      <input
        {...getCallbacks(this.props)}
        className={this.createInputClassName()}
        disabled={this.props.state === 'isDisabled'}
        type={this.props.type}
        readOnly={this.props.readOnly}
        value={this.props.value}
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}
      />
    );
  }

  render() {
    if (this.props.hasAddons) {
      return (
        <span>
          {this.renderInput()}
          <i className={[styles.fa, this.props.icon].join(' ')} />
          {this.renderHelp()}
        </span>
      );
    }
    return (
      <p className={this.createControlClassName()} style={this.props.style}>
        {this.renderInput()}
        <i className={[styles.fa, this.props.icon].join(' ')} />
        {this.renderHelp()}
      </p>
    );
  }
}
