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
  Content,
  Message,
  Image,
  Notification,
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

      <Content>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
        <h3>Third level</h3>
        <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
        <ol>
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
          <li>Donec a diam tellus.</li>
          <li>Aenean nec tortor orci.</li>
          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
          <li>Vivamus maximus ultricies pulvinar.</li>
        </ol>
        <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
        <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
        <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
        <h4>Fourth level</h4>
        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
        <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
        <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
        <h5>Fifth level</h5>
        <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
        <h6>Sixth level</h6>
        <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
      </Content>

      <Message header="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque risus mi, tempus quis placerat ut, porta nec
        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
        gravida purus diam, et dictum felis venenatis efficitur.
        Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
        arcu et sollicitudin porttitor, tortor urna tempor ligula,
        id porttitor mi magna a neque. Donec dui urna, vehicula et
        sem eget, facilisis sodales sem.</Message>

      <Message header="Hello World" color="isPrimary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque risus mi, tempus quis placerat ut, porta nec
        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
        gravida purus diam, et dictum felis venenatis efficitur.
        Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
        arcu et sollicitudin porttitor, tortor urna tempor ligula,
        id porttitor mi magna a neque. Donec dui urna, vehicula et
        sem eget, facilisis sodales sem.</Message>

      <Message color="isPrimary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque risus mi, tempus quis placerat ut, porta nec
        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
        gravida purus diam, et dictum felis venenatis efficitur.
        Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
        arcu et sollicitudin porttitor, tortor urna tempor ligula,
        id porttitor mi magna a neque. Donec dui urna, vehicula et
        sem eget, facilisis sodales sem.</Message>

      <Image src="http://placehold.it/256x256" size="is128x128" onClick={()=> console.log('asdasd')}/>

        <Notification>
          Warning lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>

        <Notification color="isPrimary" closeButtonProps={{ onClick: () => console.log('asdasd')}}>
          Warning lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
</div>

    );
  }
}
