import React, {Component} from "react";
import InlineCss from "react-inline-css";

export default class Columns extends Component {
  render () {
    return (
      <InlineCss stylesheet={`
        &:not(:last-child) {
          margin-bottom: 20px;
        }

        @media screen and (min-width: 769px) {
          & {
            display: flex;
            width: 100%;
          }
        }

        &.is-gapless > .column + .column {
          margin: 0;
        }

        &.is-vcentered {
          align-items: center;
        }

        @media screen and (min-width: 769px) {
          &.is-grid {
            flex-wrap: wrap;
          }
          &.is-grid > .column {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            padding: 10px;
            width: 33.3333%;
          }
          &.is-grid > .column + .column {
            margin-left: 0;
        }`}>{this.props.children}
      </InlineCss>
    );
  }
};

