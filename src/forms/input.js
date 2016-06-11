import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import styles from '../styles/form';
import insertCss from 'insert-css';
import kebabCase from 'lodash.kebabCase';

insertCss(csjs.getCss(styles), { prepend: true });

export default class Input extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onTouchStart: PropTypes.func,
    onDoubleClick: PropTypes.func,
    hasIcon: PropTypes.bool,
    hasIconRight: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    colors: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
    help: PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf([
        'isPrimary',
        'isInfo',
        'isSuccess',
        'isWarning',
        'isDanger',
      ]),
    }),
  };

  static defaultProps = {
    style: {},
    className: '',
    isLoading: false,
    isActive: false,
  };

  createControlClassName() {
    return [
      styles.control,
      this.props.hasIcon ? styles['has-icon'] : '',
      // Add has-icon-left class because can not user not: selector( csjs bug )
      this.props.hasIconRight ? styles['has-icon-right'] : styles['has-icon-left'],
      this.props.className,
    ].join(' ').trim();
  }

  createInputClassName() {
    return [
      styles.input,
      styles[kebabCase(this.props.colors)],
      styles[kebabCase(this.props.size)],
    ].join(' ').trim();
  }

  renderHelp() {
    if (!this.props.help) return null;
    return (
      <span className={[styles.help, styles[kebabCase(this.props.help.color)]].join(' ')}>
        {this.props.help.text}
      </span>
    );
  }

  render() {
    return (
      <p className={this.createControlClassName()}>
        <input
          className={this.createInputClassName()}
          type={this.props.type}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          value={this.props.value}
          onClick={this.props.onClick}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onTouchStart={this.props.onTouchStart}
          onDoubleClick={this.props.onDoubleClick}
          onChange={this.props.onChange}
        />
        <i className={[styles.fa, this.props.icon].join(' ')} />
        {this.renderHelp()}
      </p>
    );
  }
}
