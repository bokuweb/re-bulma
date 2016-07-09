import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class CardHeaderIcon extends Component {
  static propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.cardHeaderIcon,
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <a
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        <i
          className={[
            styles.fa,
            this.props.icon,
          ].join(' ').trim()}
        />
      </a>
    );
  }
}
