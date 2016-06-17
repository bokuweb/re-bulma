import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import { getCallbacks } from './helper/helper';

export default class Heading extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.heading,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <p
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
       {this.props.children}
      </p>
    );
  }
}
