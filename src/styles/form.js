/* eslint-disable max-len */

const csjs = require('csjs');

module.exports = csjs`

.input {
  vertical-align: middle;
  font: 99% sans-serif;
}

select.select {
  vertical-align: middle;
}

input[type="text"].input {
  vertical-align: text-bottom;
}

input[type="checkbox"].input {
  vertical-align: bottom;
}

select.select, textarea.textarea {
  font: 99% sans-serif;
}

input[type=button].input,
input[type=submit].input,
input[type=file].input,
{
  cursor: pointer;
}

input.input,
textarea.textarea {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

input.input,
select.select,
textarea.textarea {
  margin: 0;
}

input[type=button].input {
  overflow: visible;
}


.input, .textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: white;
  border: 1px solid #d3d6db;
  border-radius: 3px;
  color: #222324;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  vertical-align: top;
  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);
  max-width: 100%;
  width: 100%;
}

.input:hover, .textarea:hover {
  border-color: #aeb1b5;
}

.input:active,
.textarea:active,
.input:focus,
.textarea:focus,
.input.is-active,
.is-active.textarea {
  border-color: #1fc8db;
  outline: none;
}

.input[disabled], [disabled].textarea, .input.is-disabled, .is-disabled.textarea {
  background: #f5f7fa;
  border-color: #d3d6db;
  cursor: not-allowed;
  pointer-events: none;
}

.input[disabled]::-moz-placeholder,
[disabled].textarea::-moz-placeholder,
.input.is-disabled::-moz-placeholder,
.is-disabled.textarea::-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.input[disabled]::-webkit-input-placeholder,
[disabled].textarea::-webkit-input-placeholder,
.input.is-disabled::-webkit-input-placeholder,
.is-disabled.textarea::-webkit-input-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.input[disabled]:-moz-placeholder,[disabled].textarea:-moz-placeholder, .input.is-disabled:-moz-placeholder, .is-disabled.textarea:-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.input[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, .input.is-disabled:-ms-input-placeholder, .is-disabled.textarea:-ms-input-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.input.is-white, .is-white.textarea {
  border-color: #fff;
}

.input.is-black, .is-black.textarea {
  border-color: #111;
}

.input.is-light, .is-light.textarea {
  border-color: #f5f7fa;
}

.input.is-dark, .is-dark.textarea {
  border-color: #69707a;
}

.input.is-primary, .is-primary.textarea {
  border-color: #1fc8db;
}

.input.is-info, .is-info.textarea {
  border-color: #42afe3;
}

.input.is-success, .is-success.textarea {
  border-color: #97cd76;
}

.input.is-warning, .is-warning.textarea {
  border-color: #fce473;
}

.input.is-danger, .is-danger.textarea {
  border-color: #ed6c63;
}

.input[type="search"], [type="search"].textarea {
  border-radius: 290486px;
}

.input.is-small, .is-small.textarea {
  border-radius: 2px;
  font-size: 11px;
  height: 24px;
  line-height: 16px;
  padding-left: 6px;
  padding-right: 6px;
}

.input.is-medium, .is-medium.textarea {
  font-size: 18px;
  height: 40px;
  line-height: 32px;
  padding-left: 10px;
  padding-right: 10px;
}

.input.is-large, .is-large.textarea {
  font-size: 24px;
  height: 48px;
  line-height: 40px;
  padding-left: 12px;
  padding-right: 12px;
}

.input.is-fullwidth, .is-fullwidth.textarea {
  display: block;
  width: 100%;
}

.input.is-inline, .is-inline.textarea {
  display: inline;
  width: auto;
}

.textarea {
  display: block;
  line-height: 1.2;
  max-height: 600px;
  max-width: 100%;
  min-height: 120px;
  min-width: 100%;
  padding: 10px;
  resize: vertical;
}

.checkbox, .radio {
  cursor: pointer;
  display: inline-block;
  line-height: 16px;
  position: relative;
  vertical-align: top;
}

.checkbox input, .radio input {
  cursor: pointer;
}

.checkbox:hover, .radio:hover {
  color: #222324;
}

.is-disabled.checkbox, .is-disabled.radio {
  color: #aeb1b5;
  pointer-events: none;
}

.is-disabled.checkbox input, .is-disabled.radio input {
  pointer-events: none;
}

.radio + .radio {
  margin-left: 10px;
}

.select {
  display: inline-block;
  height: 32px;
  position: relative;
  vertical-align: top;
}

.select select {
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: white;
  border: 1px solid #d3d6db;
  border-radius: 3px;
  color: #222324;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  vertical-align: top;
  cursor: pointer;
  display: block;
  outline: none;
  padding-right: 36px;
}

.select select:hover {
  border-color: #aeb1b5;
}

.select select:active, .select select:focus, .select select.is-active {
  border-color: #1fc8db;
  outline: none;
}

.select select[disabled], .select select.is-disabled {
  background: #f5f7fa;
  border-color: #d3d6db;
  cursor: not-allowed;
  pointer-events: none;
}

.select select[disabled]::-moz-placeholder, .select select.is-disabled::-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.select select[disabled]::-webkit-input-placeholder, .select select.is-disabled::-webkit-input-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.select select[disabled]:-moz-placeholder, .select select.is-disabled:-moz-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.select select[disabled]:-ms-input-placeholder, .select select.is-disabled:-ms-input-placeholder {
  color: rgba(34, 35, 36, 0.3);
}

.select select.is-white {
  border-color: #fff;
}

.select select.is-black {
  border-color: #111;
}

.select select.is-light {
  border-color: #f5f7fa;
}

.select select.is-dark {
  border-color: #69707a;
}

.select select.is-primary {
  border-color: #1fc8db;
}

.select select.is-info {
  border-color: #42afe3;
}

.select select.is-success {
  border-color: #97cd76;
}

.select select.is-warning {
  border-color: #fce473;
}

.select select.is-danger {
  border-color: #ed6c63;
}

.select select:hover {
  border-color: #aeb1b5;
}

.select select::ms-expand {
  display: none;
}

.select.is-fullwidth {
  width: 100%;
}

.select.is-fullwidth select {
  width: 100%;
}

.select:after {
  border: 1px solid #1fc8db;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 7px;
  pointer-events: none;
  position: absolute;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  width: 7px;
  margin-top: -6px;
  right: 16px;
  top: 50%;
}

.select:hover:after {
  border-color: #222324;
}

.select.is-small {
  height: 24px;
}

.select.is-small select {
  border-radius: 2px;
  font-size: 11px;
  height: 24px;
  line-height: 16px;
  padding-left: 6px;
  padding-right: 6px;
  padding-right: 28px;
}

.select.is-medium {
  height: 40px;
}

.select.is-medium select {
  font-size: 18px;
  height: 40px;
  line-height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  padding-right: 44px;
}

.select.is-large {
  height: 48px;
}

.select.is-large select {
  font-size: 24px;
  height: 48px;
  line-height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  padding-right: 52px;
}

.help {
  display: block;
  font-size: 11px;
  margin-top: 5px;
}

.help.is-white {
  color: #fff;
}

.help.is-black {
  color: #111;
}

.help.is-light {
  color: #f5f7fa;
}

.help.is-dark {
  color: #69707a;
}

.help.is-primary {
  color: #1fc8db;
}

.help.is-info {
  color: #42afe3;
}

.help.is-success {
  color: #97cd76;
}

.help.is-warning {
  color: #fce473;
}

.help.is-danger {
  color: #ed6c63;
}

.control {
  position: relative;
  text-align: left;
}

.control:not(:last-child) {
  margin-bottom: 10px;
}

.control.has-addons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.control.has-addons .button,
.control.has-addons .input,
.control.has-addons .textarea,
.control.has-addons .select {
  border-radius: 0;
  margin-right: -1px;
  width: auto;
}

.control.has-addons .button:hover,
.control.has-addons .input:hover,
.control.has-addons .textarea:hover,
.control.has-addons .select:hover {
  z-index: 2;
}

.control.has-addons .button:active, .control.has-addons .button:focus,
.control.has-addons .input:active,
.control.has-addons .textarea:active,
.control.has-addons .input:focus,
.control.has-addons .textarea:focus,
.control.has-addons .select:active,
.control.has-addons .select:focus {
  z-index: 3;
}

.control.has-addons .button:first-child,
.control.has-addons .input:first-child,
.control.has-addons .textarea:first-child,
.control.has-addons .select:first-child {
  border-radius: 3px 0 0 3px;
}

.control.has-addons .button:first-child select,
.control.has-addons .input:first-child select,
.control.has-addons .textarea:first-child select,
.control.has-addons .select:first-child select {
  border-radius: 3px 0 0 3px;
}

.control.has-addons .button:last-child,
.control.has-addons .input:last-child,
.control.has-addons .textarea:last-child,
.control.has-addons .select:last-child {
  border-radius: 0 3px 3px 0;
}

.control.has-addons .button:last-child select,
.control.has-addons .input:last-child select,
.control.has-addons .textarea:last-child select,
.control.has-addons .select:last-child select {
  border-radius: 0 3px 3px 0;
}

.control.has-addons .button.is-expanded,
.control.has-addons .input.is-expanded,
.control.has-addons .is-expanded.textarea,
.control.has-addons .select.is-expanded {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.control.has-addons.has-addons-centered {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.control.has-addons.has-addons-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.control.has-addons.has-addons-fullwidth .button,
.control.has-addons.has-addons-fullwidth .input,
.control.has-addons.has-addons-fullwidth .textarea,
.control.has-addons.has-addons-fullwidth .select {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.control.has-icon > .fa {
  display: inline-block;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  vertical-align: top;
  width: 24px;
  color: #aeb1b5;
  pointer-events: none;
  position: absolute;
  top: 4px;
  z-index: 4;
}

.control.has-icon .input:focus + .fa, .control.has-icon .textarea:focus + .fa {
  color: #222324;
}

.control.has-icon .input.is-small + .fa, .control.has-icon .is-small.textarea + .fa {
  font-size: 10.5px;
  top: 0;
}

.control.has-icon .input.is-medium + .fa, .control.has-icon .is-medium.textarea + .fa {
  font-size: 21px;
  top: 8px;
}

.control.has-icon .input.is-large + .fa, .control.has-icon .is-large.textarea + .fa {
  font-size: 21px;
  top: 12px;
}

.control.has-icon.has-icon-left > .fa {
  left: 4px;
}

.control.has-icon.has-icon-left .input, .control.has-icon.has-icon-left .textarea {
  padding-left: 32px;
}

.control.has-icon.has-icon-left .input.is-small, .control.has-icon.has-icon-left .is-small.textarea {
  padding-left: 24px;
}

.control.has-icon.has-icon-left .input.is-small + .fa, .control.has-icon.has-icon-left .is-small.textarea + .fa {
  left: 0;
}

.control.has-icon.has-icon-left .input.is-medium, .control.has-icon.has-icon-left .is-medium.textarea {
  padding-left: 40px;
}

.control.has-icon.has-icon-left .input.is-medium + .fa, .control.has-icon.has-icon-left .is-medium.textarea + .fa {
  left: 8px;
}

.control.has-icon.has-icon-left .input.is-large, .control.has-icon.has-icon-left .is-large.textarea {
  padding-left: 48px;
}

.control.has-icon.has-icon-left .input.is-large + .fa, .control.has-icon.has-icon-left .is-large.textarea + .fa {
  left: 12px;
}

.control.has-icon.has-icon-right > .fa {
  right: 4px;
}

.control.has-icon.has-icon-right .input, .control.has-icon.has-icon-right .textarea {
  padding-right: 32px;
}

.control.has-icon.has-icon-right .input.is-small, .control.has-icon.has-icon-right .is-small.textarea {
  padding-right: 24px;
}

.control.has-icon.has-icon-right .input.is-small + .fa, .control.has-icon.has-icon-right .is-small.textarea + .fa {
  right: 0;
}

.control.has-icon.has-icon-right .input.is-medium, .control.has-icon.has-icon-right .is-medium.textarea {
  padding-right: 40px;
}

.control.has-icon.has-icon-right .input.is-medium + .fa, .control.has-icon.has-icon-right .is-medium.textarea + .fa {
  right: 8px;
}

.control.has-icon.has-icon-right .input.is-large, .control.has-icon.has-icon-right .is-large.textarea {
  padding-right: 48px;
}

.control.has-icon.has-icon-right .input.is-large + .fa, .control.has-icon.has-icon-right .is-large.textarea + .fa {
  right: 12px;
}

.control.is-grouped {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.control.is-grouped > .control:not(:last-child) {
  margin-bottom: 0;
  margin-right: 10px;
}

.control.is-grouped > .control.is-expanded {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.control.is-grouped.is-grouped-centered {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.control.is-grouped.is-grouped-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

@media screen and (min-width: 769px) {
  .control.is-horizontal {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .control.is-horizontal > .control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 5;
    -webkit-flex: 5;
        -ms-flex: 5;
            flex: 5;
  }
}

`;
