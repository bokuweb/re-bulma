import React, {Component} from "react";
import InlineCss from "react-inline-css";

export default class Columns extends Component {
  render () {
    return (
      <InlineCss stylesheet={`
        & .columns:not(:last-child) {
          margin-bottom: 20px;
        }

        @media screen and (min-width: 769px) {
          & .columns {
            display: flex;
            width: 100%;
          }
        }

        & .columns.is-gapless > .column + .column {
          margin: 0;
        }

        & .columns.is-vcentered {
          align-items: center;
        }

        @media screen and (min-width: 769px) {
          & .columns.is-grid {
            flex-wrap: wrap;
          }
          & .columns.is-grid > .column {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            padding: 10px;
            width: 33.3333%;
          }
          & .columns.is-grid > .column + .column {
            margin-left: 0;
        }`}>
        <div className="columns">{this.props.children}</div>
      </InlineCss>
    );
  }
};

