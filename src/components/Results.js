import React, { Component } from 'react';
import _ from 'lodash';

const mapStateToProps = (state) => {
  const { legalEntityUI: { selectedId }, pharmaciesUI: { selectedIds } } = state;
  const { legalEntity, pharmacies } = state;
  return {
    pharmacies: _.filter(pharmacies, ({ pharmaID }) => (selectedIds.includes(pharmaID))),
    legalEntity: legalEntity[selectedIds],
    contractTerms: '',
  };
}

class Results extends Component {
  render() {
    return(
      <div className='row'>
        <table className='table'>

        </table>
      </div>
    );
  }
}
