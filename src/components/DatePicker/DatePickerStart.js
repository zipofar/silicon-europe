import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from './Input';

export default ({ input: { onChange, value } }) => {
  return (
    <DatePicker
      customInput={<Input />}
      onChange={onChange}
      dateFormat="MM.d.YYYY"
      selected={value}
      className="form-control"
    /> 
  );
}

