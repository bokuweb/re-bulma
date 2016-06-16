import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/box';
import insertCss from 'insert-css';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Box extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
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
      <div {...this.props} className={this.createClassName()} >
        {this.props.children}
      </div>
    );
  }
}
