import React, { Component, PropTypes } from 'react';
import Styles from './styles';

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.box,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div {...this.props} className={this.createClassName()} >
        {this.props.children}
      </div>
    );
  }
}
