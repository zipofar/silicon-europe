import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input';

const DatePickerStart = ({ input: { onChange, value } }) => (
  <DatePicker
    customInput={<Input />}
    onChange={onChange}
    dateFormat="MM.d.YYYY"
    selected={value}
    className="form-control"
  />
);

export default DatePickerStart;
