import csjs from 'csjs';
import insertCss from 'insert-css';
import box from './styles/box';
import button from './styles/button';
import columns from './styles/columns';
import form from './styles/form';
import icon from './styles/icon';
import label from './styles/label';
import table from './styles/table';
import tabs from './styles/tabs';
import tag from './styles/tag';
import title from './styles/title';
import content from './styles/content';
import progress from './styles/progress';
import image from './styles/image';
import message from './styles/message';
import notification from './styles/notification';
import card from './styles/card';
import level from './styles/level';
import heading from './styles/heading';
import modal from './styles/modal';
import mediaObject from './styles/media-Object';
import menu from './styles/menu';
import nav from './styles/nav';
import pagination from './styles/pagination';

const styles = {
  box,
  button,
  columns,
  form,
  icon,
  label,
  table,
  tag,
  tabs,
  title,
  content,
  progress,
  message,
  image,
  notification,
  card,
  level,
  heading,
  modal,
  mediaObject,
  menu,
  nav,
  pagination,
};

const defaultOptions = {
  prepend: true,
  components: {
    box: true,
    button: true,
    columns: true,
    form: true,
    icon: true,
    label: true,
    table: true,
    tabs: true,
    tag: true,
    title: true,
    content: true,
    progress: true,
    message: true,
    image: true,
    notification: true,
    card: true,
    level: true,
    heading: true,
    modal: true,
    mediaObject: true,
    menu: true,
    nav: true,
    pagination: true,
  },
};

let instance = null;

export default class Styles {
  constructor() {
    if (!instance) instance = this;
    return instance;
  }

  getStyles() {
    return this.styles;
  }

  initialize(options = defaultOptions) {
    const combinedStyles = Object
            .keys(options.components)
            .filter(key => options.components[key])
            .reduce((pre, cur) => pre + styles[cur](), '');
    console.time('1')
    this.styles = csjs`${combinedStyles}`;
    console.timeEnd('1')
    console.dir(this.styles);
    console.time('2')
    insertCss(csjs.getCss(this.styles), { prepend: options.prepend });
    console.timeEnd('2')
  }
}
