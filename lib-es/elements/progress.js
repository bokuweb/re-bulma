var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

export default class Progress extends Component {

  createClassName() {
    return [styles.progress, styles[this.props.size], styles[this.props.color], this.props.className].join(' ').trim();
  }

  render() {
    return React.createElement('progress', _extends({}, this.props, { className: this.createClassName() }));
  }
}
Progress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['isSmall', 'isMedium', 'isLarge']),
  color: PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
};
Progress.defaultProps = {
  className: ''
};