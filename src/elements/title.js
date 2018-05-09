import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../build/styles';

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
    ]),
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    return [
      styles.title,
      styles[this.props.size],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p {...this.props} className={this.createClassName()}>
        {this.props.children}
      </p>
    );
  }
}
