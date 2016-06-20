/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import { getCallbacks } from './helper/helper';

export class Media extends Component {
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
      styles.media,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <article
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </article>
    );
  }
}

export class MediaLeft extends Component {
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
      styles['media-left'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <figure
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </figure>
    );
  }
}

export class MediaContent extends Component {
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
      styles['media-content'],
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

export class MediaRight extends Component {
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
      styles['media-right'],
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
