var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';

export default class Radio extends Component {

  createControlClassName() {
    return [styles.control, this.props.className].join(' ').trim();
  }

  renderForm() {
    return this.props.data.map((d, i) => React.createElement(
      'label',
      { className: styles.radio, key: i },
      React.createElement('input', _extends({}, d.inputProps, { type: 'radio' })),
      d.label
    ));
  }

  render() {
    return React.createElement(
      'p',
      { className: this.createControlClassName(), style: this.props.style },
      this.renderForm()
    );
  }
}
Radio.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.array
};
Radio.defaultProps = {
  data: [],
  style: {},
  className: ''
};