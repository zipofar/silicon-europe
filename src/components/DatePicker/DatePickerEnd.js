import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from './Input';

export default class DatePickerReduxForm extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    if (this.props.value2 !== nextProps.value2) {
      this.handleChange(nextProps.value2);
    }
  }

  handleChange = (date) => {
    const { input: { onChange } } = this.props;
    onChange(date);
  }

  isOlderDate = (endDate) => {
    const { startDate, input: { name } } = this.props;
    return endDate >= startDate;
  }

  render() {
    const { value2, input: { name } } = this.props;
    return (
      <DatePicker
        customInput={<Input />}
        onChange={this.handleChange}
        dateFormat="MM.d.YYYY"
        selected={value2 || new Date(Date.now())}
        filterDate={this.isOlderDate}
        className="form-control"
      /> 
    );
  }
}

