var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class PanelBlock extends Component {

  createClassName() {
    return [styles.panelBlock, this.props.isActive ? styles.isActive : '', this.props.className].join(' ').trim();
  }

  renderIcon() {
    return React.createElement(
      'span',
      { className: styles.panelIcon },
      React.createElement('i', { className: [styles.fa, this.props.icon].join(' ') })
    );
  }

  render() {
    return React.createElement(
      'span',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }),
      this.props.icon ? this.renderIcon() : null,
      this.props.children
    );
  }
}
PanelBlock.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  style: PropTypes.object
};
PanelBlock.defaultProps = {
  className: '',
  style: {}
};