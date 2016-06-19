import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import { getCallbacks } from './helper/helper';

export default class Modal extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    onCloseRequest: PropTypes.func,
    showOverlayCloseButton: PropTypes.bool,
    footerContent: PropTypes.node,
    type: PropTypes.oneOf(['card', 'image']),
  };

  static defaultProps = {
    style: {},
    className: '',
    onCloseRequest: () => null,
  };

  createModalClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.modal,
      this.props.isActive ? styles['is-active'] : '',
      this.props.className,
    ].join(' ').trim();
  }

  renderContent() {
    const styles = new Styles().getStyles();
    if (this.props.type === 'image') {
      return (
        <div className={styles['modal-content']} {...getCallbacks(this.props)}>
          {this.props.children}
        </div>
      );
    }

    if (this.props.type === 'card') {
      return (
        <div className={styles['modal-card']}>
          <header className={styles['modal-card-head']}>
            <p className={styles['modal-card-title']}>Modal title</p>
            <button className={styles.delete} onClick={this.props.onCloseRequest} />
          </header>
          <section className={styles['modal-card-body']}>
            {this.props.children}
          </section>
          {
            this.props.footerContent
              ? (
                <footer className={styles['modal-card-foot']}>
                  {this.props.footerContent}
                </footer>
              )
              : null
          }
        </div>

      );
    }

    return (
      <div className={styles['modal-container']}>
        <div className={styles['modal-content']} {...getCallbacks(this.props)}>
          {this.props.children}
        </div>
      </div>
    );
  }
  render() {
    const styles = new Styles().getStyles();
    return (
      <div className={this.createModalClassName()}>
        <div className={styles['modal-background']} onClick={this.props.onCloseRequest} />
        {this.renderContent()}
        {
          this.props.showOverlayCloseButton
            ? <button className={styles['modal-close']} onClick={this.props.onCloseRequest} />
            : null
        }
      </div>
    );
  }
}
