import React from 'react';

export default class Intput extends React.Component {
  handlePressKey(e) {
    e.preventDefault();
  }

  render() {
    const { onChange, onClick, value } = this.props;
    return (
      <input
        onChange={() => {}}
        onKeyDown={this.handlePressKey}
        className="form-control"
        onClick={onClick}
        value={value}
      />
    );
  }
}
