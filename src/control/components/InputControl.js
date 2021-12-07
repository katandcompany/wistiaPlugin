import React from 'react';

const InputControl = ({
  type,
  id,
  label,
  placeholder,
  value,
  appendStyle = {},
  appendText = '\u00A0',
  changeHandler = () => {},
  focusHandler = () => {}
}) => {
  const keyHandler = (event, callback) => {
    event.preventDefault();
    callback();
  };
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-group">
        <input
          type={type}
          className="form-control"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
        />
        <span className="input-group-addon" style={appendStyle} role="button" tabIndex="0" onClick={focusHandler} onKeyPress={event => keyHandler(event, focusHandler)}>{appendText}</span>
      </div>
    </div>
  );
};

export default InputControl;
