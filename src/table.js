/* eslint-disable react/no-multi-comp */

import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';

export class Table extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isBordered: PropTypes.bool,
    isStriped: PropTypes.bool,
    isNarrow: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.table,
      this.props.isBordered ? styles.isBordered : '',
      this.props.isStriped ? styles.isStriped : '',
      this.props.isNarrow ? styles.isNarrow : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <table
        {...this.props}
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
    isIcon: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.td,
      this.props.isIcon ? styles.isIcon : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <td
        {...this.props}
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
  };

  static defaultProps = {
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
  };

  static defaultProps = {
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
  };

  static defaultProps = {
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
  };

  static defaultProps = {
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
  };

  static defaultProps = {
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
        className={this.createClassName()}
      >
       {this.props.children}
      </tfoot>
    );
  }
}
