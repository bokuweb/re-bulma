/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import { getCallbacks } from './helper/helper';

export class Menu extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.menu,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <aside
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </aside>
    );
  }
}

export class MenuLabel extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles['menu-label'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </p>
    );
  }
}

export class MenuList extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles['menu-list'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ul
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </ul>
    );
  }
}

export class MenuLink extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      this.props.isActive ? styles['is-active'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <a
        {...getCallbacks(this.props)}
        href={this.props.href}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </a>
    );
  }
}

