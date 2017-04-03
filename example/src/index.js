import React from 'react';
import { render } from 'react-dom';
import Example from './example';
import insertCss from 'insert-css';
import css from '../../build/css';

try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {}

render(<Example />, document.querySelector('#root'));

