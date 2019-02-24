import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from './Table';

const tableHeaders = ['Legal Entity', 'Street', 'City', 'Country'];

const mapStateToProps = (state) => ({
  legalEntity: Object.values(state.legalEntity).map(e => ({
    id: e.legalEntityID,
    name: e.legalEntityName,
    address: `${e.address2} ${e.address1}`,
    city: e.city,
    country: e.country,
  })),
  legalEntityUI: state.legalEntityUI,
});

const actionCreators = {
  selectLegalEntity: actions.selectLegalEntity,
  showPharmacy: actions.showPharmacy,
};

class LegalEntity extends React.Component {
  selectEntity = selectedId => (e) => {
    this.props.selectLegalEntity({ selectedId });
  }

  renderItems() {
    const { legalEntity, legalEntityUI } = this.props;
    const isSelected = id => (id === legalEntityUI.selectedId);
    return legalEntity.map(e => (
      <tr
        key={e.legalEntityID}
        onClick={this.selectEntity(e.legalEntityID)}
        className={isSelected(e.legalEntityID) ? 'table-success' : ''}
      >
        <td>{e.legalEntityName}</td>
        <td>{e.address2} {e.address1}</td>
        <td>{e.city}</td>
        <td>{e.country}</td>
      </tr>
    ));
  }

  render() {
    const { legalEntity, showPharmacy, legalEntityUI } = this.props;
    const tableProps = {
      selectedIds: [legalEntityUI.selectedId],
      selectItem: this.selectEntity,
      items: legalEntity,
      tableHeaders,
    };
    if (legalEntityUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>1: Select Legal Entity</h2>
        <Table {...tableProps} />
        <button onClick={showPharmacy} className='btn btn-primary'>Select Pharamcies</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(LegalEntity);
