var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Tile extends Component {

  createClassName() {
    return [styles.tile, styles[this.props.size], styles[this.props.context], this.props.isVertical ? styles.isVertical : '', this.props.isDesktop ? styles.isDesktop : '', this.props.className].join(' ').trim();
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
Tile.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  context: PropTypes.oneOf(['isAncestor', 'isParent', 'isChild']),
  isVertical: PropTypes.bool,
  size: PropTypes.oneOf(['is1', 'is2', 'is3', 'is4', 'is5', 'is6', 'is7', 'is8', 'is9', 'is10', 'is11', 'is12']),
  isDesktop: PropTypes.bool
};
Tile.defaultProps = {
  className: '',
  style: {}
};