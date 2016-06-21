import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';
import { getCallbacks } from './helper/helper';

export default class Image extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf([
      'is16x16',
      'is24x24',
      'is32x32',
      'is48x48',
      'is64x64',
      'is96x96',
      'is128x128',
    ]),
    ratio: PropTypes.oneOf([
      'isSquare',
      'is1by1',
      'is4by3',
      'is3by2',
      'is16by9',
      'is2by1',
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
      this.props.size && styles[this.props.size.replace('is', 'is-')],
      this.props.ratio && styles[this.props.ratio.replace('is', 'is-')],
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
