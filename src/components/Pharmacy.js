import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from './Table';

const tableHeaders = ['Pharmacy', 'Street', 'City', 'Country'];

const mapStateToProps = (state) => ({
  pharmacies: Object.values(state.pharmacies).map(e => ({
    id: e.pharmaID,
    name: e.pharmaName,
    address: `${e.address_2} ${e.address_1}`,
    city: e.city,
    country: e.country,
  })),
  pharmaciesUI: state.pharmaciesUI,
});

const actionCreators = {
  selectPharmacy: actions.selectPharmacy,
  showLegalEntity: actions.showLegalEntity,
  showContractTerms: actions.showContractTerms,
  unSelectPharmacy: actions.unSelectPharmacy,
};

class Pharmacy extends React.Component {
  selectRow = selectedId => (e) => {
    const { unSelectPharmacy, selectPharmacy, pharmaciesUI } = this.props;
    if (pharmaciesUI.selectedIds.includes(selectedId)) {
      unSelectPharmacy({ selectedId }); 
    } else {
      selectPharmacy({ selectedId });
    }
  }

  render() {
    const { pharmacies, showLegalEntity, showContractTerms, pharmaciesUI } = this.props;
    const tableProps = {
      selectedIds: pharmaciesUI.selectedIds,
      selectItem: this.selectRow,
      items: pharmacies,
      tableHeaders,
    };
    if (pharmaciesUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>2: Select Pharmacies</h2>
        <Table {...tableProps} />
        <button onClick={showLegalEntity} className='btn btn-secondary float-left'>Back</button>
        <button
          onClick={showContractTerms}
          className='btn btn-primary float-right'
          disabled={pharmaciesUI.selectedIds.length === 0}
        >
          Enter Contract Terms
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Pharmacy);
