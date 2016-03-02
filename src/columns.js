import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import insertCss from 'insert-css';

const styles = csjs`
  .columns:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 769px) {
    .columns {
      display: flex;
      width: 100%;
    }
  }

  .columns.is-gapless > .column + .column {
    margin: 0;
  }

  .columns.is-vcentered {
    align-items: center;
  }

  @media screen and (min-width: 769px) {
    .columns.is-grid {
      flex-wrap: wrap;
    }
    .columns.is-grid > .column {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      padding: 10px;
      width: 33.3333%;
    }
    .columns.is-grid > .column + .column {
      margin-left: 0;
    }
  }
`;

insertCss(csjs.getCss(styles));

export default class Columns extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className={ styles.columns }>{ this.props.children }</div>
    );
  }
}

