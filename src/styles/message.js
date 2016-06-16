export default () => `
.message {
  color: #69707a;
  font-weight: 400;
  line-height: 1.428571428571429;
  font-weight: normal;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 14px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.message:not(:last-child) {
  margin-bottom: 20px;
}

.message-body {
  color: #69707a;
  border: 1px solid #d3d6db;
  border-radius: 3px;
  padding: 12px 15px;
}

.message-body strong {
  color: inherit;
}

.message-header {
  background: #69707a;
  border-radius: 3px 3px 0 0;
  color: white;
  padding: 7px 10px;
}

.message-header strong {
  color: inherit;
}

.message-header + .message-body {
  border-radius: 0 0 3px 3px;
  border-top: none;
}

.message {
  background: #f5f7fa;
  border-radius: 3px;
}

.message.is-white {
  background: white;
}

.message.is-white .message-header {
  background: #fff;
  color: #111;
}

.message.is-white .message-body {
  border-color: #fff;
  color: #666666;
}

.message.is-black {
  background: whitesmoke;
}

.message.is-black .message-header {
  background: #111;
  color: #fff;
}

.message.is-black .message-body {
  border-color: #111;
  color: gray;
}

.message.is-light {
  background: #f5f7fa;
}

.message.is-light .message-header {
  background: #f5f7fa;
  color: #69707a;
}

.message.is-light .message-body {
  border-color: #f5f7fa;
  color: #666666;
}

.message.is-dark {
  background: #f4f5f6;
}

.message.is-dark .message-header {
  background: #69707a;
  color: #f5f7fa;
}

.message.is-dark .message-body {
  border-color: #69707a;
  color: gray;
}

.message.is-primary {
  background: #edfbfc;
}

.message.is-primary .message-header {
  background: #1fc8db;
  color: white;
}

.message.is-primary .message-body {
  border-color: #1fc8db;
  color: gray;
}

.message.is-info {
  background: #edf7fc;
}

.message.is-info .message-header {
  background: #42afe3;
  color: white;
}

.message.is-info .message-body {
  border-color: #42afe3;
  color: gray;
}

.message.is-success {
  background: #f4faf0;
}

.message.is-success .message-header {
  background: #97cd76;
  color: white;
}

.message.is-success .message-body {
  border-color: #97cd76;
  color: gray;
}

.message.is-warning {
  background: #fffbeb;
}

.message.is-warning .message-header {
  background: #fce473;
  color: rgba(17, 17, 17, 0.5);
}

.message.is-warning .message-body {
  border-color: #fce473;
  color: #666666;
}

.message.is-danger {
  background: #fdeeed;
}

.message.is-danger .message-header {
  background: #ed6c63;
  color: white;
}

.message.is-danger .message-body {
  border-color: #ed6c63;
  color: gray;
}
`;
