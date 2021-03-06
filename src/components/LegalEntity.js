import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from './Table';
import LoadSpinner from './utils/LoadSpinner';
import Alert from './utils/Alert';

const tableHeaders = ['Legal Entity', 'Street', 'City', 'Country'];

const mapStateToProps = state => ({
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
  fetchPharmacy: actions.fetchPharmacy,
};

class LegalEntity extends React.Component {
  selectEntity = selectedId => () => {
    const { selectLegalEntity } = this.props;
    selectLegalEntity({ selectedId });
  }

  loadPharmacies = () => {
    const { legalEntityUI, showPharmacy, fetchPharmacy } = this.props;
    fetchPharmacy(legalEntityUI.selectedId);
    showPharmacy();
  }

  render() {
    const { legalEntity, legalEntityUI } = this.props;
    const tableProps = {
      selectedIds: [legalEntityUI.selectedId],
      selectItem: this.selectEntity,
      items: legalEntity,
      tableHeaders,
    };
    if (legalEntityUI.isShow === false) {
      return null;
    }
    if (legalEntityUI.load === 'request') {
      return <LoadSpinner />;
    }
    if (legalEntityUI.load === 'failure') {
      return <Alert>Error loading</Alert>;
    }
    return (
      <div>
        <h2>1: Select Legal Entity</h2>
        <Table {...tableProps} />
        <button
          onClick={this.loadPharmacies}
          className="btn btn-primary float-right"
          disabled={!legalEntityUI.selectedId}
          type="button"
        >
          Select Pharmacies
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(LegalEntity);
