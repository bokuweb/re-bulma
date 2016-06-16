export default () => `

.progress,
.progress:before,
.progress:after {
  box-sizing: inherit;
}

.progress {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  height: 12px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.progress::-webkit-progress-bar {
  background: #d3d6db;
}

.progress::-webkit-progress-value {
  background: #69707a;
}

.progress::-moz-progress-bar {
  background: #69707a;
}

.progress.is-white::-webkit-progress-value {
  background: #fff;
}

.progress.is-white::-moz-progress-bar {
  background: #fff;
}

.progress.is-black::-webkit-progress-value {
  background: #111;
}

.progress.is-black::-moz-progress-bar {
  background: #111;
}

.progress.is-light::-webkit-progress-value {
  background: #f5f7fa;
}

.progress.is-light::-moz-progress-bar {
  background: #f5f7fa;
}

.progress.is-dark::-webkit-progress-value {
  background: #69707a;
}

.progress.is-dark::-moz-progress-bar {
  background: #69707a;
}

.progress.is-primary::-webkit-progress-value {
  background: #1fc8db;
}

.progress.is-primary::-moz-progress-bar {
  background: #1fc8db;
}

.progress.is-info::-webkit-progress-value {
  background: #42afe3;
}

.progress.is-info::-moz-progress-bar {
  background: #42afe3;
}

.progress.is-success::-webkit-progress-value {
  background: #97cd76;
}

.progress.is-success::-moz-progress-bar {
  background: #97cd76;
}

.progress.is-warning::-webkit-progress-value {
  background: #fce473;
}

.progress.is-warning::-moz-progress-bar {
  background: #fce473;
}

.progress.is-danger::-webkit-progress-value {
  background: #ed6c63;
}

.progress.is-danger::-moz-progress-bar {
  background: #ed6c63;
}

.progress.is-small {
  height: 8px;
}

.progress.is-medium {
  height: 16px;
}

.progress.is-large {
  height: 20px;
}

.progress:not(:last-child) {
  margin-bottom: 20px;
}

`;
