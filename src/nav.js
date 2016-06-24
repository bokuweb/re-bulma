/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';
import { getCallbacks } from './helper/helper';

export class Nav extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    hasShadow: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.nav,
      this.props.hasShadow ? styles.hasShadow : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <nav
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </nav>
    );
  }
}

export class NavGloup extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    isMenu: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const align = this.props.align && this.props.align.substring(0, 1).toUpperCase() + this.props.align.substring(1);
    return [
      styles[`nav${align}`],
      this.props.isMenu ? styles.navMenu : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}

export class NavItem extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isTab: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
   
    return [
      styles.navItem,
      this.props.isActive ? styles.isActive : '',
      this.props.isTab ? styles.isTab : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </span>
    );
  }
}

export class NavToggle extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.navToggle,
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        <span />
        <span />
        <span />
      </span>
    );
  }
}

export class NavContainer extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isTab: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.container,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </div>
    );
  }
}
