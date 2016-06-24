import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Tile extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
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
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.tile,
      styles[this.props.size],
      styles[this.props.context],
      this.props.isVertical ? styles.isVertical : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...this.props} className={this.createClassName()}>
        {this.props.children}
      </div>
    );
  }
}
