import React, { Component, PropTypes } from 'react';
import styles from '../../../build/styles';
import { getCallbacks } from '../../helper/helper';

export default class Modal extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    onCloseRequest: PropTypes.func,
    showOverlayCloseButton: PropTypes.bool,
    headerContent: PropTypes.node,
    footerContent: PropTypes.node,
    type: PropTypes.oneOf(['card', 'image']),
  };

  static defaultProps = {
    style: {},
    className: '',
    onCloseRequest: () => null,
  };

  createModalClassName() {
    return [
      styles.modal,
      this.props.isActive ? styles.isActive : '',
      this.props.className,
    ].join(' ').trim();
  }

  renderContent() {
    if (this.props.type === 'image') {
      return (
        <div className={styles.modalContent} {...getCallbacks(this.props)}>
          {this.props.children}
        </div>
      );
    }

    if (this.props.type === 'card') {
      return (
        <div className={[styles.modalCard, '__re-bulma_modal_card'].join(' ')}>
          <header className={styles.modalCardHead}>
            <div className={styles.modalCardTitle}>{this.props.headerContent}</div>
            <button className={styles.delete} onClick={this.props.onCloseRequest} />
          </header>
          <section className={styles.modalCardBody}>
            {this.props.children}
          </section>
          {
            this.props.footerContent ? (
              <footer className={styles.modalCardFoot}>
                {this.props.footerContent}
              </footer>
            )
            : null
          }
        </div>

      );
    }

    return (
      <div className={styles.modalContainer}>
        <div className={styles.modalContent} {...getCallbacks(this.props)}>
          {this.props.children}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={this.createModalClassName()}>
        <div className={styles.modalBackground} onClick={this.props.onCloseRequest} />
        {this.renderContent()}
        {
          this.props.showOverlayCloseButton
            ? <button className={styles.modalClose} onClick={this.props.onCloseRequest} />
            : null
        }
      </div>
    );
  }
}
