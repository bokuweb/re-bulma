/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import { getCallbacks } from './helper/helper';

export class Card extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isFullwidth: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.card,
      this.props.isFullwidth ? styles['is-fullwidth'] : '',
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

export class CardImage extends Component {
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
      styles['card-image'],
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

export class CardContent extends Component {
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
      styles['card-content'],
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

export class CardHeader extends Component {
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
      styles['card-header'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <header
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </header>
    );
  }
}

export class CardHeaderTitle extends Component {
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
      styles['card-header-title'],
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

export class CardHeaderIcon extends Component {
  static propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles['card-header-icon'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    const styles = new Styles().getStyles();
    return (
      <a
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        <i
          className={[
            styles.fa,
            this.props.icon,
          ].join(' ').trim()}
        />
      </a>
    );
  }
}

export class CardFooter extends Component {
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
      styles['card-footer'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <footer
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </footer>
    );
  }
}

export class CardFooterItem extends Component {
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
      styles['card-footer-item'],
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
