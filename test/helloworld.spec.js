import React from 'react';
import { shallow } from 'enzyme';
import assert from 'power-assert';
import Hello from '../src/index';

describe('Hello', () => {
  it('Should render as a <h1>', () => {
    const wrapper = shallow(<Hello />);
    assert.equal(wrapper.type(), 'h1');
  });

  it('Shoud have style with color red', () => {
    const wrapper = shallow(<Hello />);
    const expectedStyles = {
      color: 'red'
    };
    assert.deepEqual(wrapper.prop('style'), expectedStyles);
  });

  it('Should contain string, Hello, world', () => {
    const wrapper = shallow(<Hello />);
    assert(wrapper.contains('Hello, world'));
  });
});
