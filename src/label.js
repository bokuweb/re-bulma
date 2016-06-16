import React, { Component, PropTypes } from 'react';
import Styles from './styles';

export default class Label extends Component {
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
      styles.label,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <label {...this.props} className={this.createClassName()}>
        {this.props.children}
      </label>
    );
  }
}
