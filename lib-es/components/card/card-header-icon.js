var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class CardHeaderIcon extends Component {

  createClassName() {
    return [styles.cardHeaderIcon, this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'a',
      _extends({}, getCallbacks(this.props), {
        style: this.props.style,
        className: this.createClassName()
      }),
      React.createElement('i', {
        className: [styles.fa, this.props.icon].join(' ').trim()
      })
    );
  }
}
CardHeaderIcon.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.string,
  className: PropTypes.string
};
CardHeaderIcon.defaultProps = {
  style: {},
  className: ''
};