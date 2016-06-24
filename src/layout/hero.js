/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export class Hero extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isBold: PropTypes.bool,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
      'isFullhieght',
    ]),
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
      'isLink',
      'isWhite',
      'isLight',
      'isDark',
      'isBlack',
      'isLink',
    ]),
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.hero,
      this.props.isBold ? styles.isBold : '',
      styles[this.props.size],
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <section
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </section>
    );
  }
}

export class HeroBody extends Component {
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
    return [
      styles.heroBody,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <section
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </section>
    );
  }
}

export class HeroHead extends Component {
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
    return [
      styles.heroHead,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <section
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </section>
    );
  }
}

export class HeroFoot extends Component {
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
    return [
      styles.heroFoot,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <section
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </section>
    );
  }
}
