import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from './Input';

export default class DatePickerReduxForm extends React.Component {
  render() {
    const { input: { value, onChange } } = this.props;
    console.log(value)
    return (
      <DatePicker
        customInput={<Input />}
        onChange={onChange}
        dateFormat="MM.d.YYYY"
        selected={value || new Date(Date.now())}
        className="form-control"
      /> 
    );
  }
}

