import React from 'react';

export default (props) => (
  <div className="alert alert-danger" role="alert">
    {props.children}
  </div>
);
