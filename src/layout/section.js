import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';

export default class Section extends Component {
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
      styles.section,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <Section {...this.props} className={this.createClassName()}>
        {this.props.children}
      </Section>
    );
  }
}
