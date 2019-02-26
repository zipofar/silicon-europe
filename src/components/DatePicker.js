import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyInput from './MyInput';

export default class ReduxFormDatePicker extends React.Component {
  render() {
    const { input: { value, onChange } } = this.props;
    console.log(this.props)
    return (
      <DatePicker
        customInput={<MyInput />}
        onChange={onChange}
        dateFormat="MM.d.YYYY"
        selected={value ? new Date(value) : new Date(Date.now())}
        className="form-control"
      /> 
    );
  }
}
