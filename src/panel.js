/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';

export class Panel extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.panel,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <nav {...this.props} className={this.createClassName()} >
        {this.props.children}
      </nav>
    );
  }
}

export class PanelHeading extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles['panel-heading'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p {...this.props} className={this.createClassName()} >
        {this.props.children}
      </p>
    );
  }
}

export class PanelTabs extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles['panel-tabs'],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p {...this.props} className={this.createClassName()} >
        {this.props.children}
      </p>
    );
  }
}

export class PanelBlock extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    icon: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles['panel-block'],
      this.props.isActive ? styles['is-active'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span {...this.props} className={this.createClassName()} >
        {
          this.props.icon
            ? (
              <span className={styles['panel-icon']}>
                <i className={[styles.fa, this.props.icon].join(' ')} />
              </span>
            )
            : null
        }
        {this.props.children}
      </span>
    );
  }
}

