import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

const actionCreators = {
  showContractTerms: actions.showContractTerms,
};

const mapStateToProps = (state) => {
  const { legalEntityUI: { selectedId }, pharmaciesUI: { selectedIds } } = state;
  const { legalEntity, pharmacies } = state;
  return {
    pharmacies: _.filter(pharmacies, ({ pharmaID }) => (selectedIds.includes(pharmaID))),
    legalEntity: legalEntity[selectedId],
    contractTerms: state.contractTerms,
    isShow: state.resultsUI.isShow,
  };
}

class Results extends Component {
  render() {
    const { pharmacies, legalEntity, contractTerms, isShow, showContractTerms } = this.props;
    if (!isShow) {
      return null;
    }
    return(
      <div className='row'>
        <table className='table'>
          <thead>
            <tr>
              <th>Legal Entity</th>
              <th>Street</th>
              <th>City</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>{legalEntity.legalEntityName}</td>
              <td>{legalEntity.address2} {legalEntity.address1}</td>
              <td>{legalEntity.city}</td>
              <td>{legalEntity.country}</td>
            </tr>
          </thead>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th>Pharmacies</th>
              <th>Street</th>
              <th>City</th>
              <th>Country</th>
            </tr>
              {pharmacies.map(e => (
                <tr key={e.pharmaID}>
                  <td>{e.pharmaName}</td>
                  <td>{e.address_2} {e.address_1}</td>
                  <td>{e.city}</td>
                  <td>{e.country}</td>
                </tr>
              ))}
          </thead>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th colSpan="2">Contract Terms</th>
            </tr>
            {_.map(contractTerms, ({ name, value }) => (
              <tr key={_.uniqueId()}><td>{name}</td><td>{value}</td></tr>
            ))}
          </thead>
        </table>
        <button onClick={showContractTerms} className='btn btn-secondary'>Back</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Results);
