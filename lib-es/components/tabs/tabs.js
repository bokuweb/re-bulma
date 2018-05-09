var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class Tabs extends Component {

  createClassName() {
    return [styles.tabs, styles[this.props.alignment], styles[this.props.size], styles[this.props.tabStyle], this.props.isFullwidth ? styles.isFullwidth : '', this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'div',
      _extends({}, getCallbacks(this.props), {
        className: this.createClassName(),
        style: this.props.style
      }),
      this.props.children
    );
  }
}
Tabs.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  tabStyle: PropTypes.oneOf(['isBoxed', 'isToggle']),
  isFullwidth: PropTypes.bool,
  alignment: PropTypes.oneOf(['isCentered', 'isRight']),
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge'])
};
Tabs.defaultProps = {
  style: {},
  className: ''
};