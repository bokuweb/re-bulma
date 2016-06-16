import csjs from 'csjs';
import insertCss from 'insert-css';
import box from './styles/box';
import button from './styles/buttoon';
import columns from './styles/columns';
import form from './styles/form';
import icon from './styles/icon';
import label from './styles/label';
import table from './styles/table';
import tabs from './styles/tabs';
import tag from './styles/tag';
import title from './styles/title';
import progress from './styles/progress';

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
  progress,
};

const defaultOptions = {
  prepend: true,
  components: {

    progress: true,
  },
};

let instance = null;

export default class Styles {
  constructor() {
    if (!instance) {
      instance = this;
    }
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
