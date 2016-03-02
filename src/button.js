import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import insertCss from 'insert-css';

const styles = csjs`
  .button:hover { 
    z-index: 2;
  }

  .button:active,
  .button:focus {
    z-index: 3;
  }

  .button {
    margin-right: -1px;
    margin: 0;
    width: auto;
    overflow: visible;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: white;
    border: 1px solid #d3d6db;
    border-radius: 3px;
    color: #222324;
    display: inline-block;
    font-size: 14px;
    height: 32px;
    line-height: 24px;
    padding: 3px 8px;
    position: relative;
    vertical-align: top;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 3px 10px;
    text-align: center;
    white-space: nowrap;
  }

  .button:hover {
    border-color: #aeb1b5;
  }

  .button:active,
  .button:focus {
    border-color: #1fc8db;
    outline: none;
  }
`;

insertCss(csjs.getCss(styles));

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <button className={styles.button}>{ this.props.children }</button>
    );
  }
}
