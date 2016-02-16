import React, {Component} from 'react';
import {Button, Columns, Column} from '../../src';

export default class Example extends Component{
  render() {
    return (
      <Columns>
        <Column size='isHalf'>a</Column>
        <Column>b</Column>
        <Column>c</Column>
        <Column>c</Column>
      </Columns>
    );
  }
}
