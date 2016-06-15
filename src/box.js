import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/box';
import insertCss from 'insert-css';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.box,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div className={this.createClassName()} style={this.props.customStyle}>
        {this.props.children}
      </div>
    );
  }
}
