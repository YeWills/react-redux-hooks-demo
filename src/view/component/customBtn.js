import React, { useState, useRef, useEffect } from 'react';


export const customBtn = (info = 'getjson') => {
  return ({ onSubmit, onCancle, setFormValue, formValue }) => {
    const onGetJson = () => {
      const [name, value] = Object.entries(formValue)[0];
      setFormValue({ ...formValue, [name]: `${value}${info}` });
    };
    return (
      <div className="btn-wrap">
        <button onClick={onCancle}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onGetJson}>Get Json</button>
      </div>
    );
  };
};
