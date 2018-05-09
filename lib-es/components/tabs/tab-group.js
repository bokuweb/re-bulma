var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class TabGroup extends Component {

  createClassName() {
    return [styles[this.props.alignment], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'ul',
      _extends({}, getCallbacks(this.props), { className: this.createClassName() }),
      this.props.children
    );
  }
}
TabGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  alignment: PropTypes.oneOf(['isLeft', 'isCenter', 'isRight'])
};
TabGroup.defaultProps = {
  className: ''
};