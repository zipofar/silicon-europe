import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input';

export default class DatePickerReduxForm extends React.Component {
  componentWillUpdate(nextProps) {
    const { value2: oldValue } = this.props;
    const { value2: newValue } = nextProps;
    if (oldValue !== newValue) {
      this.handleChange(newValue);
    }
  }

  handleChange = (date) => {
    const { input: { onChange } } = this.props;
    onChange(date);
  }

  isOlderDate = (endDate) => {
    const { startDate } = this.props;
    return endDate >= startDate;
  }

  render() {
    const { value2 } = this.props;
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
