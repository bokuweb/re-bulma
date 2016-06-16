import React, { Component, PropTypes } from 'react';
import Styles from '../styles';
import kebabCase from 'lodash.kebabCase';

export default class Select extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
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
    const styles = new Styles().getStyles();
    return [
      styles.control,
      styles[kebabCase(this.props.state)],
      this.props.className,
    ].join(' ').trim();
  }

  createSelectClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.select,
      styles[kebabCase(this.props.size)],
    ].join(' ').trim();
  }

  renderHelp() {
    const styles = new Styles().getStyles();
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
        <span className={this.createSelectClassName()}>
          <select
            {...this.props}
            style={{}}
            disabled={this.props.state === 'isDisabled'}
          >
            {this.props.children}
          </select>
          {this.renderHelp()}
        </span>
      </p>
    );
  }
}
