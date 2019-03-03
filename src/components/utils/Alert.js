import React from 'react';

const Alert = ({ children }) => (
  <div className="alert alert-danger" role="alert">
    {children}
  </div>
);

export default Alert;
