import React, {Component} from "react";
import InlineCss from "react-inline-css";
import styles from './styles/column';

export default class Column extends Component {
  render () {
    return (
      <InlineCss className='__react-bulma__column' style={{background: '#333'}} stylesheet={`
          ${styles.column}
          ${styles.isHalf}
        }`}>
        {this.props.children}
      </InlineCss>
    );
  }
};

