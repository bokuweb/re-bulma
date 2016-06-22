import React, { Component, PropTypes } from 'react';
import styles from '../build/styles';

export default class Footer extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.footer,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <Footer {...this.props} className={this.createClassName()}>
        {this.props.children}
      </Footer>
    );
  }
}
