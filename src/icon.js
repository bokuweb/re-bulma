import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from './styles/icon';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Icon extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    customStyle: PropTypes.object,
    icon: PropTypes.string,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
  };

  static defaultProps = {
    customStyle: {},
    className: '',
  };

  createClassName() {
    return [
      styles.icon,
      styles[kebabCase(this.props.size)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <span className={this.createClassName()} style={this.props.customStyle}>
        <i className={[styles.fa, this.props.icon].join(' ').trim()} />
      </span>
    );
  }
}
