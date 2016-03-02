import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/column';
import insertCss from 'insert-css';

insertCss(csjs.getCss(styles));

export default class Column extends Component {
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.string,
  };

  render() {
    return (
      <div className={ styles[this.props.size] || styles.column } style={{ background: '#333' }}>
        { this.props.children }
      </div>
    );
  }
}

