import React, { Component } from 'react';
import { Button, Columns, Column } from '../../src';

export default class Example extends Component {
  render() {
    return (
      <div>
        <Button >test</Button>
        <Columns>
          <Column size="is2">aaaa</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
          <Column>bbbb</Column>
          <Column>cccc</Column>
        </Columns>
      </div>
    );
  }
}
