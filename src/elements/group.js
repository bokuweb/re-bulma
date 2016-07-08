import React, { Component, PropTypes } from 'react';
import styles from '../../build/styles';
import { getCallbacks } from '../helper/helper';

export default class Group extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createControlClassName() {
    return [
      styles.control,
      styles.isGrouped,
      this.props.className,
    ].join(' ').trim();
  }

  cloneWithProps() {
    if (React.Children.count(this.props.children) < 2) {
      return (
        <p className={styles.control}>
          {this.props.children && React.cloneElement(this.props.children, {
            hasAddons: true,
          })}
        </p>
      );
    }
    return this.props.children.map((child, i) => (
      <p key={i} className={`${styles.control} ${child.props.isExpanded ? styles.isExpanded : ''}`}>
        {React.cloneElement(child, { hasAddons: true })}
      </p>
    ));
  }

  render() {
    return (
      <div
        className={this.createControlClassName()}
        style={this.props.style}
        {...getCallbacks(this.props)}
      >
        {this.cloneWithProps()}
      </div>
    );
  }
}
