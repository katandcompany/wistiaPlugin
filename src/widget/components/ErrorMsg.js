import React from 'react';

const ErrorMsg = ({ message }) => (
  <div className="error-message-container alert-danger">
    <p>{message}</p>
  </div>
);

export default ErrorMsg;
