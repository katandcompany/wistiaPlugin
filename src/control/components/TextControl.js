import React from 'react';

const TextControl = ({
  type,
  id,
  label,
  placeholder,
  value,
  changeHandler = () => {},
  focusHandler = () => {}
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onFocus={focusHandler}
    />
  </div>
);

export default TextControl;
