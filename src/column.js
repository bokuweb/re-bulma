import React, {Component} from "react";
import InlineCss from "react-inline-css";

export default class Column extends Component {
  render () {
    return (
      <InlineCss className='column' style={{background: '#333'}} stylesheet={`
        media screen and (max-width: 768px) {
          .column + .column {
            margin-top: 20px;
          }
        }
        @media screen and (min-width: 769px) {
          .column {
            flex: 1;
          }
          .column + .column {
            margin-left: 20px;
          }
          .column.is-double {
            flex: 2;
          }
          .column.is-triple {
            flex: 3;
          }
          .column.is-quadruple {
            flex: 4;
          }
          .column.is-half {
            flex: none;
            width: 50%;
          }
          .column.is-third {
            flex: none;
            width: 33.3333%;
          }
          .column.is-quarter {
            flex: none;
            width: 25%;
          }
          .column.is-1 {
            flex: none;
            width: 8.33333%;
          }
          .column.is-2 {
            flex: none;
            width: 16.66667%;
          }
          .column.is-3 {
            flex: none;
            width: 25%;
          }
          .column.is-4 {
            flex: none;
            width: 33.33333%;
          }
          .column.is-5 {
            flex: none;
            width: 41.66667%;
          }
          .column.is-6 {
            flex: none;
            width: 50%;
          }
          .column.is-7 {
            flex: none;
            width: 58.33333%;
          }
          .column.is-8 {
            flex: none;
            width: 66.66667%;
          }
          .column.is-9 {
            flex: none;
            width: 75%;
          }
          .column.is-10 {
            flex: none;
            width: 83.33333%;
          }
          .column.is-11 {
            flex: none;
            width: 91.66667%;
          }
        }`}>
        {this.props.children}
      </InlineCss>
    );
  }
};

