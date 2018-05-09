var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

export default class Icon extends Component {

  createClassName() {
    return [styles.icon, styles[this.props.size], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement(
      'span',
      _extends({}, this.props, { className: this.createClassName() }),
      React.createElement('i', { className: [styles.fa, this.props.icon].join(' ').trim() })
    );
  }
}
Icon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge'])
};
Icon.defaultProps = {
  style: {},
  className: ''
};