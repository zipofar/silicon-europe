import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import DatePicker from './DatePicker';

const mapStateToProps = (state) => ({
  contractTermsUI: state.contractTermsUI,
});

const actionCreators = {
  showPharmacy: actions.showPharmacy,
  showResults: actions.showResults,
};

class ContractTerms extends React.Component {
  renderForm = () => (
    <form>
      <div className="form-group row">
        <label forhtml="contractType" className="col-sm-2 col-form-label">Contract Type</label>
        <div className="col-md-3 col-sm-10">
          <Field name="contractType" className="form-control" component="select">
            <option value="Charter">Charter</option>
            <option value="Order">Order</option>
            <option value="Proxy">Proxy</option>
            <option value="Certificate">Certificate</option>
          </Field>
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="serviceAgreement" className="col-sm-2 col-form-label">Service Agreement #</label>
        <div className="col-md-5 col-sm-10">
          <Field name="serviceAgreement" component="input" type="text" className="form-control" id="serviceAgreement" />
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="contractStartDate" className="col-sm-2 col-form-label">Contract Start Date</label>
        <div className="col-md-5 col-sm-10">
          <Field name="contractStartDate" component={DatePicker} type="text" />
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="location" className="col-sm-2 col-form-label">Location</label>
        <div className="col-md-10 col-sm-10">
          <Field name="location" component="input" type="text" className="form-control" id="location" />
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="contractorName" className="col-sm-2 col-form-label">Contractor Name</label>
        <div className="col-md-10 col-sm-10">
          <Field name="contractorName" component="input" type="text" className="form-control" id="contractorName" />
        </div>
      </div>
    </form>
  );
  render() {
    const { showResults, showPharmacies, contractTermsUI } = this.props;
    if (contractTermsUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>3: Enter Contract Terms</h2>
        {this.renderForm()}
        <button onClick={showPharmacies} className='btn btn-primary'>Back</button>
        <button onClick={showResults} className='btn btn-primary'>View Results</button>
      </div>
    );
  }
}

const connected = connect(mapStateToProps, actionCreators)(ContractTerms);
export default reduxForm({ form: 'contractTerms' })(connected);
