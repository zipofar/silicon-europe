import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


library.add(faCheck);

const mapStateToProps = (state) => ({
  legalEntity: Object.values(state.legalEntity),
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
        <td>{isSelected(e.legalEntityID) ? <FontAwesomeIcon icon="check" /> : null}</td>
        <td>{e.legalEntityName}</td>
        <td>{e.address2} {e.address1}</td>
        <td>{e.city}</td>
        <td>{e.country}</td>
      </tr>
    ));
  }

  render() {
    const { showPharmacy, legalEntityUI } = this.props;
    if (legalEntityUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>1: Select Legal Entity</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th><div style={ { opacity: '0' } }><FontAwesomeIcon icon="check" /></div></th>
              <th scope="col">Legal Entity</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
        <button onClick={showPharmacy} className='btn btn-primary'>Select Pharamcies</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(LegalEntity);
