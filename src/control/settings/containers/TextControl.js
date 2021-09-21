import React from 'react';

const TextControl = ({
  type,
  id,
  label,
  placeholder,
  value,
  changeHandler
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} className="form-control" id={id} name={id} placeholder={placeholder} value={value} onChange={changeHandler} />
    </div>
  );
};

export default TextControl;
