/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/table';
import insertCss from 'insert-css';

insertCss(csjs.getCss(styles), { prepend: true });

export class Table extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
    isBordered: PropTypes.bool,
    isStriped: PropTypes.bool,
    isNarrow: PropTypes.bool,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.table,
      this.props.isBordered ? styles['is-bordered'] : '',
      this.props.isStriped ? styles['is-striped'] : '',
      this.props.isNarrow ? styles['is-narrow'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <table
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
        {this.props.children}
      </table>
    );
  }
}

export class Td extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
    isIcon: PropTypes.bool,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.td,
      this.props.isIcon ? styles['is-icon'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <td
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
        {this.props.children}
      </td>
    );
  }
}

export class Th extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.th,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <th
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
        {this.props.children}
      </th>
    );
  }
}

export class Tr extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tr
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
        {this.props.children}
      </tr>
    );
  }
}

export class Tbody extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tbody
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
       {this.props.children}
      </tbody>
    );
  }
}

export class Thead extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <thead
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
       {this.props.children}
      </thead>
    );
  }
}

export class Tfoot extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tr,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <tfoot
        {...this.props}
        style={this.props.customStyle}
        className={this.createClassName()}
      >
       {this.props.children}
      </tfoot>
    );
  }
}
