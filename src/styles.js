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
    this.styles = csjs`${combinedStyles}`;
    insertCss(csjs.getCss(this.styles), { prepend: options.prepend });
  }
}
