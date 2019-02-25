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
  selectPharmacy: actions.selectPharmacy,
  showPharmacy: actions.showPharmacy,
};

class Pharmacy extends React.Component {
  selectRow = selectedId => (e) => {
    this.props.selectPharmacy({ selectedId });
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
