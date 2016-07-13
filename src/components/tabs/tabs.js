import React, { Component, PropTypes } from 'react';
import { getCallbacks } from '../../helper/helper';
import styles from '../../../build/styles';

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    tabStyle: PropTypes.oneOf([
      'isBoxed',
      'isToggle',
    ]),
    isFullwidth: PropTypes.bool,
    alignment: PropTypes.oneOf([
      'isCentered',
      'isRight',
    ]),
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.tabs,
      styles[this.props.alignment],
      styles[this.props.size],
      styles[this.props.tabStyle],
      this.props.isFullwidth ? styles.isFullwidth : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <div
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

