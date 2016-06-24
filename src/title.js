/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';
import kebabCase from 'lodash.kebabCase';

export class Title extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.title,
      styles[kebabCase(this.props.size)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p {...this.props} className={this.createClassName()}>
        {this.props.children}
      </p>
    );
  }
}

export class Subtitle extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.subtitle,
      styles[kebabCase(this.props.size)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p {...this.props} className={this.createClassName()}>
        {this.props.children}
      </p>
    );
  }
}
