import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';

export default class Radio extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
    style: {},
    className: '',
  };

  createControlClassName() {
    return [
      styles.control,
      this.props.className,
    ].join(' ').trim();
  }

  renderForm() {
    return this.props.data.map((d, i) => (
      <label className={styles.radio} key={i}>
        <input {...d.inputProps} type="radio" />
        {d.label}
      </label>
    ));
  }

  render() {
    return (
      <p className={this.createControlClassName()} style={this.props.style}>
        {this.renderForm()}
      </p>
    );
  }
}
