import { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataComponent extends Component {

  dataProps() {
    const extraProps = {};
    if (typeof this.props.data !== 'undefined' && this.props.data && this.props.data.length > 0) {
      this.props.data.forEach(d => {
        if (d.name && d.value) {
          const v = typeof d.value === 'string' ? d.value.replace(/'/g, '&quot;') : d.value;
          extraProps[`data-${encodeURIComponent(d.name)}`] = v;
        }
      });
    }
    return extraProps;
  }
}
DataComponent.propTypes = {
  data: PropTypes.array
};