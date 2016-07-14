import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Select extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    hasAddons: PropTypes.bool,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
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
    style: {},
    className: '',
    isLoading: false,
    isActive: false,
  };

  createControlClassName() {
    return [
      styles.control,
      styles[this.props.state],
      this.props.className,
    ].join(' ').trim();
  }

  createSelectClassName() {
    return [
      styles.select,
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

  renderSelect() {
    return (
      <span className={this.createSelectClassName()} style={this.props.style}>
        <select
          {...getCallbacks(this.props)}
          disabled={this.props.state === 'isDisabled'}
          defaultValue={this.props.defaultValue}
          value={this.props.value}
        >
          {this.props.children}
        </select>
        {this.renderHelp()}
      </span>
    );
  }

  render() {
    if (this.props.hasAddons) {
      return this.renderSelect();
    }
    return (
      <p className={this.createControlClassName()} style={this.props.style}>
        {this.renderSelect()}
      </p>
    );
  }
}
