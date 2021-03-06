import React from 'react';

const Button = ({
  buttonType = 'button',
  id,
  classList,
  children
}) => (
  <button
    id={id}
    className={classList}
    name={id}
    type={buttonType}
  >
    {children}
  </button>
);

export default Button;
