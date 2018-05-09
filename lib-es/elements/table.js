var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Table extends Component {

  createClassName() {
    return [styles.table, this.props.isBordered ? styles.isBordered : '', this.props.isStriped ? styles.isStriped : '', this.props.isNarrow ? styles.isNarrow : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'table',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Table.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isBordered: PropTypes.bool,
  isStriped: PropTypes.bool,
  isNarrow: PropTypes.bool,
  style: PropTypes.object
};
Table.defaultProps = {
  style: {},
  className: ''
};