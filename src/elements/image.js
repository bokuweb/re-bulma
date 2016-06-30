import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Image extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf([
      'is16X16',
      'is24X24',
      'is32X32',
      'is48X48',
      'is64X64',
      'is96X96',
      'is128X128',
    ]),
    ratio: PropTypes.oneOf([
      'isSquare',
      'is1By1',
      'is4By3',
      'is3By2',
      'is16By9',
      'is2By1',
    ]),
  };

  static defaultProps = {
    src: '',
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.image,
      styles[this.props.size],
      styles[this.props.ratio],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <figure
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        <img src={this.props.src} alt={this.props.alt} />
      </figure>
    );
  }
}
