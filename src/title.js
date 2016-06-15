/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/title';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export class Title extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
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
    customStyle: {},
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
      <span className={this.createClassName()} style={this.props.customStyle}>
        {this.props.children}
      </span>
    );
  }
}


export class Subtitle extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
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
    customStyle: {},
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
      <span className={this.createClassName()} style={this.props.customStyle}>
        {this.props.children}
      </span>
    );
  }
}
