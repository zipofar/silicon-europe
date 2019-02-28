import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm, formValueSelector, submit } from 'redux-form';
import DatePickerReduxForm from './DatePicker/DatePickerReduxForm';

const contractType = ['Charter', 'Order', 'Proxy', 'Certificate'];

const formDefinition = [
  ['contractType', 'Contract Type'],
  ['serviceAgreement', 'Service Agreement #'],
  ['contractStartDate', 'Contract Start Date'],
  ['contractEndDate', 'Contract End Date'],
  ['location', 'Location'],
  ['contractorName', 'Contractor Name'],
];

const handleSubmit = (values) => {
  console.log('Submit', values)
  connect()(
    ({ dispatch }) => {
      console.log(dispatch)
      dispatch({action: 'CONTRACT-TERMS_ADD', payload: {contractTerms: values}});
    }
  );
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('contractTerms');
  const startDate = selector(state, 'contractStartDate');
  const endDate = selector(state, 'contractEndDate');
  const normalizeEndDate = startDate > endDate ? startDate : endDate;
  return ({
    contractTermsUI: state.contractTermsUI,
    startDate: selector(state, 'contractStartDate'),
    endDate: normalizeEndDate,
    initialValues: {
      contractType: contractType[0],
      serviceAgreement: '',
      contractStartDate: new Date(Date.now()),
      contractEndDate: new Date(Date.now()),
      location: '',
      contractorName: '',
    },
  });
};

const actionCreators = {
  showPharmacy: actions.showPharmacy,
  showResults: actions.showResults,
  addContractTerms: actions.addContractTerms,
  sumbit: submit,
};

class ContractTerms extends React.Component {
  renderForm = () => (
    <form>
      <div className="form-group row">
        <label forhtml="contractType" className="col-sm-2 col-form-label">Contract Type</label>
        <div className="col-md-3 col-sm-10">
          <Field name="contractType" className="form-control" component="select">
            {contractType.map(e => (<option key={e} value={e}>{e}</option>))}
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
          <Field name="contractStartDate" component={DatePickerReduxForm} type="text" value2={this.props.startDate} />
        </div>
      </div>
      <div className="form-group row">
        <label forhtml="contractEndDate" className="col-sm-2 col-form-label">Contract End Date</label>
        <div className="col-md-5 col-sm-10">
          <Field name="contractEndDate" component={DatePickerReduxForm} type="text" value2={this.props.endDate} startDate={this.props.startDate} />
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
    const { showResults, showPharmacy, contractTermsUI, submit } = this.props;
    if (contractTermsUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>3: Enter Contract Terms</h2>
        {this.renderForm()}
        <button onClick={showPharmacy} className='btn btn-primary'>Back</button>
        <button onClick={() => submit('contractTerms')} className='btn btn-primary'>View Results</button>
      </div>
    );
  }
}
const FormDecoratedComponent = reduxForm({ form: 'contractTerms', onSubmit: handleSubmit })(ContractTerms);
export default connect(mapStateToProps, actionCreators)(FormDecoratedComponent);

