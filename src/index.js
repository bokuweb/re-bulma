import Button from './button';
import { Columns, Column } from './columns';
import Label from './label';
import Input from './forms/input';
import Textarea from './forms/textarea';
import Select from './forms/select';
import Checkbox from './forms/checkbox';
import Radio from './forms/radio';
import { Table, Td, Th, Tr, Tbody, Thead, Tfoot } from './table';
import { Title, Subtitle } from './title';
import Box from './box';
import Icon from './icon';
import { Tabs, TabGroup, Tab } from './tabs';
import Tag from './tag';
import Progress from './progress';
import Content from './content';
import Message from './message';
import Styles from './styles';

const initialize = () => {
  const styles = new Styles();
  styles.initialize();
};

export {
  Button,
  Columns,
  Column,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
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
  Tabs,
  TabGroup,
  Tab,
  Tag,
  Progress,
  Content,
  Message,
  initialize,
};

