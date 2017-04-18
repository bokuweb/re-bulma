import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Tile extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    context: PropTypes.oneOf([
      'isAncestor',
      'isParent',
      'isChild',
    ]),
    isVertical: PropTypes.bool,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
      'is7',
      'is8',
      'is9',
      'is10',
      'is11',
      'is12',
    ]),
    isDesktop: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  createClassName() {
    return [
      styles.tile,
      styles[this.props.size],
      styles[this.props.context],
      this.props.isVertical ? styles.isVertical : '',
      this.props.isDesktop ? styles.isDesktop : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
