import React from 'react';
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


library.add(faCheck);

export default class Table extends React.Component {
  renderRow = (cols) => {
    return Object.values(cols).map(e => (
      <td key={_.uniqueId()}>{e}</td>
    ));
  }
  
  renderItems() {
    const { items, selectItem, selectedIds } = this.props;
    const isSelected = id => (selectedIds.includes(id));
    return items.map(e => (
      <tr
        key={e.id}
        onClick={selectItem(e.id)}
        className={isSelected(e.id) ? 'table-success' : ''}
      >
        <td>{isSelected(e.id) ? <FontAwesomeIcon icon="check" /> : null}</td>
        {this.renderRow(_.omit(e, 'id'))}
      </tr>
    ));
  }

  render() {
    const { tableHeaders } = this.props;
    console.log(tableHeaders)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th><div style={ { opacity: '0' } }><FontAwesomeIcon icon="check" /></div></th>
            {tableHeaders.map(e => (<th key={_.uniqueId()} scope="col">{e}</th>))}
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

