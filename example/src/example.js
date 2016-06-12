import React, { Component } from 'react';
import { Button, Columns, Column, Input, Textarea, Select, Label, Checkbox } from '../../src';


export default class Example extends Component {
  render() {
    return (
      <div>
        <Button >test</Button>
        <Button size="isLarge" states="isActive">Guthub</Button>
        <Button size="isSmall" states="isActive" icon="fa fa-github">Github</Button>
        <Columns>
          <Column size="is2" style={{ background: '#ccc' }}>aaaa</Column>
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
        <Input
          hasAddons
          state="isDisabled"
          color="isDanger"
          size="isSmall"
          help={{
            text: 'help text',
            color: 'isSuccess',
          }}
        />
        <Textarea
          state="isLoading"
          color="isInfo"
          help={{
            text: 'help text',
            color: 'isSuccess',
          }}
        />
        <Label>examples</Label>
        <Select>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
        <Checkbox>Remember me</Checkbox>
      </div>
    );
  }
}
