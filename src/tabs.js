/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import { getCallbacks } from './helper/helper';
import styles from '../build/styles';

export class Tabs extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    tabStyle: PropTypes.oneOf([
      'isBoxed',
      'isToggle',
    ]),
    isFullwidth: PropTypes.bool,
    alignment: PropTypes.oneOf([
      'isCentered',
      'isRight',
    ]),
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tabs,
      styles[this.props.alignment],
      styles[this.props.size],
      styles[this.props.tabStyle],
      this.props.isFullwidth ? styles.isFullwidth : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export class TabGroup extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    alignment: PropTypes.oneOf([
      'isLeft',
      'isCenter',
      'isRight',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles[this.props.alignment],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ul {...getCallbacks(this.props)} className={this.createClassName()}>
        {this.props.children}
      </ul>
    );
  }
}

export class Tab extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <li
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        <span>
          {this.props.children}
        </span>
      </li>
    );
  }
}
