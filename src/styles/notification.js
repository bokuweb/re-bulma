import common from './common';

export default () => `
.notification,
.notification:before,
.notification:after {
  box-sizing: inherit;
}

.notification {
  ${common()}
  background: #f5f7fa;
  border-radius: 3px;
  padding: 16px 20px;
  position: relative;
}

.notification:after {
  clear: both;
  content: " ";
  display: table;
}

.notification .delete, .notification .modal-close {
  border-radius: 0 3px;
  float: right;
  margin: -16px -20px 0 20px;
}

.notification .subtitle,
.notification .title {
  color: inherit;
}

.notification.is-white {
  background: #fff;
  color: #111;
}

.notification.is-black {
  background: #111;
  color: #fff;
}

.notification.is-light {
  background: #f5f7fa;
  color: #69707a;
}

.notification.is-dark {
  background: #69707a;
  color: #f5f7fa;
}

.notification.is-primary {
  background: #1fc8db;
  color: white;
}

.notification.is-info {
  background: #42afe3;
  color: white;
}

.notification.is-success {
  background: #97cd76;
  color: white;
}

.notification.is-warning {
  background: #fce473;
  color: rgba(17, 17, 17, 0.5);
}

.notification.is-danger {
  background: #ed6c63;
  color: white;
}

`;
