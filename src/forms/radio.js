import React, { Component, PropTypes } from 'react';
import Styles from '../styles';

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
    const styles = new Styles().getStyles();
    return [
      styles.control,
      this.props.className,
    ].join(' ').trim();
  }

  renderForm() {
    const styles = new Styles().getStyles();
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
