import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm, formValueSelector } from 'redux-form';
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
};

class ContractTerms extends React.Component {
  handleS = (values) => {
    const { showResults, addContractTerms } = this.props;
    const contractTerms = formDefinition.reduce((acc, [id, name]) => {
      const value = _.isDate(values[id]) ? values[id].toISOString().split('T')[0] : values[id];
      return { ...acc, [id]: { value, name } };
    }, {});

    addContractTerms({ contractTerms });
    showResults();
  }
  
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
    const { showResults, showPharmacy, contractTermsUI, submit, handleSubmit } = this.props;
    if (contractTermsUI.isShow === false) {
      return null;
    }
    return (
      <div>
        <h2>3: Enter Contract Terms</h2>
        {this.renderForm()}
        <button onClick={showPharmacy} className='btn btn-primary'>Back</button>
        <button onClick={handleSubmit(this.handleS)} className='btn btn-primary'>View Results</button>
      </div>
    );
  }
}
const FormDecoratedComponent = reduxForm({ form: 'contractTerms' })(ContractTerms);
export default connect(mapStateToProps, actionCreators)(FormDecoratedComponent);

