var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PanelTabs extends Component {

  createClassName() {
    return [styles.panelTabs, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'p',
      _extends({
        style: this.props.style
      }, getCallbacks(this.props), {
        className: this.createClassName()
      }),
      this.props.children
    );
  }
}
PanelTabs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
};
PanelTabs.defaultProps = {
  className: '',
  style: {}
};