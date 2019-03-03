import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from './Table';
import LoadSpinner from './utils/LoadSpinner';
import Alert from './utils/Alert';

const tableHeaders = ['Pharmacy', 'Street', 'City', 'Country'];

const mapStateToProps = state => ({
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
  selectRow = selectedId => () => {
    const { unSelectPharmacy, selectPharmacy, pharmaciesUI } = this.props;
    if (pharmaciesUI.selectedIds.includes(selectedId)) {
      unSelectPharmacy({ selectedId });
    } else {
      selectPharmacy({ selectedId });
    }
  }

  render() {
    const {
      pharmacies,
      showLegalEntity,
      showContractTerms,
      pharmaciesUI,
    } = this.props;

    const tableProps = {
      selectedIds: pharmaciesUI.selectedIds,
      selectItem: this.selectRow,
      items: pharmacies,
      tableHeaders,
    };

    if (pharmaciesUI.isShow === false) {
      return null;
    }
    if (pharmaciesUI.load === 'request') {
      return <LoadSpinner />;
    }
    if (pharmaciesUI.load === 'failure') {
      return <Alert>Error loading</Alert>;
    }
    return (
      <div>
        <h2>2: Select Pharmacies</h2>
        <Table {...tableProps} />
        <button
          onClick={showLegalEntity}
          className="btn btn-secondary float-left"
          type="button"
        >
          Back
        </button>
        <button
          onClick={showContractTerms}
          className="btn btn-primary float-right"
          disabled={pharmaciesUI.selectedIds.length === 0}
          type="button"
        >
          Enter Contract Terms
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Pharmacy);
