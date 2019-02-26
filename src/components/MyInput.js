import React from 'react';

export default class MyIntput extends React.Component {
  onKey(e) {
    e.preventDefault();
  }
  render() {
    console.log(this.props)
    return (
      <input onChange={this.props.onChange} onKeyDown={this.onKey} className="form-control" onClick={this.props.onClick} value={this.props.value} />
    );
  }
}
