import React, { Component } from 'react';
import {
  initialize,
  Button,
  Columns,
  Column,
  Input,
  Textarea,
  Select,
  Label,
  Checkbox,
  Table,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Tfoot,
  Title,
  Subtitle,
  Box,
  Icon,
  Radio,
  Tabs,
  TabGroup,
  Tab,
  Tag,
  Progress,
} from '../../src';

initialize();

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

        <Table isStriped>
          <Thead>
            <Tr>
              <Th>One</Th>
              <Th>Two</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Three</Td>
              <Td>Four</Td>
            </Tr>
            <Tr>
              <Td>Three</Td>
              <Td>Four</Td>
            </Tr>
          </Tbody>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>InsTrument</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tfoot>
            <Tr>
             <Th className="sad">Name</Th>
             <Th>InsTrument</Th>
             <Th></Th>
             <Th></Th>
            </Tr>
          </Tfoot>
          <Tbody>
            <Tr>
              <Td>Misty Abbott</Td>
              <Td>Bass Guitar</Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>John SmiTh</Td>
              <Td>RhyThm Guitar</Td>
              <Td class="is-icon">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>Robert Mikels</Td>
              <Td>Lead Guitar</Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </Td>
              <Td isIcon>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <p><Title size="is1">Title</Title></p>
        <p><Title size="is2">Title</Title></p>
        <p><Title size="is3">Title</Title></p>
        <p><Title size="is4">Title</Title></p>
        <p><Title size="is5">Title</Title></p>
        <p><Title size="is6">Title</Title></p>

        <p><Subtitle size="is1">Title</Subtitle></p>
        <p><Subtitle size="is2">Title</Subtitle></p>
        <p><Subtitle size="is3">Title</Subtitle></p>
        <p><Subtitle size="is4">Title</Subtitle></p>
        <p><Subtitle size="is5">Title</Subtitle></p>
        <p><Subtitle size="is6">Title</Subtitle></p>
        <Box>sadasdasdsad</Box>
        <Icon icon="fa fa-heart" size="isSmall" style={{color: 'red'}} className="hge" />
        <Icon icon="fa fa-heart" />
        <Icon icon="fa fa-heart" size="isMedium" />
        <Icon icon="fa fa-heart" size="isLarge" />
        <Radio data={[
            { label: 'b', inputProps: { name: 'a', onChange: () => console.log('asdasd')}},
            { label: 'd', inputProps: { name: 'a', onChange: () => console.log('asdasd')}},
            { label: 'f', inputProps: { name: 'a', onChange: () => console.log('asdasd')}}
          ]} />
          <Tabs>
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs alignment="isCentered">
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs alignment="isRight">
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs>
            <TabGroup alignment="isLeft">
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>

            <TabGroup alignment="isCenter">
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>

            <TabGroup alignment="isRight">
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs size="isMedium">
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs size="isLarge">
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs tabStyle="isToggle">
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tabs isFullwidth>
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>
          <Tabs tabStyle="isBoxed" isFullwidth>
            <TabGroup>
              <Tab isActive >aaa</Tab>
              <Tab>aaa</Tab>
              <Tab>ccc</Tab>
            </TabGroup>
          </Tabs>

          <Tag>tag sample</Tag>
          <Tag color="isPrimary">tag sample</Tag>
          <Tag color="isPrimary">tag sample<Button delete /></Tag>
          <Tag color="isDanger">tag sample<Button delete /></Tag>
          <Progress value="45" max="100" />
          <Progress color="isPrimary" size="isLarge" value="15" max="100" />
      </div>

    );
  }
}
