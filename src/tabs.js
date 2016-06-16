/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/tabs';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

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
      styles[kebabCase(this.props.alignment)],
      styles[kebabCase(this.props.size)],
      styles[kebabCase(this.props.tabStyle)],
      this.props.isFullwidth ? styles['is-fullwidth'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...this.props} className={this.createClassName()}>
        {this.props.children}
      </div>
    );
  }
}

export class TabGroup extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
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
      styles[kebabCase(this.props.alignment)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ul {...this.props} className={this.createClassName()}>
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
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      this.props.isActive ? styles['is-active'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <li {...this.props} className={this.createClassName()}>
        <span>
          {this.props.children}
        </span>
      </li>
    );
  }
}
