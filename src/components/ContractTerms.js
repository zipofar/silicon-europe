import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import DatePickerReduxForm from './DatePicker/DatePickerReduxForm';

const mapStateToProps = (state) => {
  const selector = formValueSelector('contractTerms');
  const startDate = selector(state, 'contractStartDate');
  const endDate = selector(state, 'contractEndDate');
  const normalizeEndDate = startDate > endDate ? startDate : endDate;
console.log(normalizeEndDate)
  return ({
    contractTermsUI: state.contractTermsUI,
    startDate: selector(state, 'contractStartDate'),
    endDate: normalizeEndDate,
    initialValues: {
      contractStartDate: new Date(Date.now()),
      contractEndDate: new Date(Date.now()),
    },
  });
};

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
          <Field name="contractStartDate" component={DatePickerReduxForm} type="text" />
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="contractEndDate" className="col-sm-2 col-form-label">Contract End Date</label>
        <div className="col-md-5 col-sm-10">
          <Field name="contractEndDate" component={DatePickerReduxForm} type="text" value={this.props.endDate} />
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
    console.log(this.props)
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
const FormDecoratedComponent = reduxForm({ form: 'contractTerms' })(ContractTerms);
export default connect(mapStateToProps, actionCreators)(FormDecoratedComponent);
//const connected = connect(mapStateToProps, actionCreators)(ContractTerms);
//export default reduxForm({ form: 'contractTerms' })(connected);
