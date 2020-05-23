import React, { useState, useRef, useEffect } from 'react';


// eslint-disable-next-line import/prefer-default-export
export const Btn = ({ onSubmit, onCancle, onReset }) => {
  return (
    <div className="btn-wrap">
      <button onClick={onCancle}>Cancel</button>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export const toArray = (item) => {
  if(Object.prototype.toString.call(item) === '[object Array]'){
    return item;
  }
  if(!item && item !== 0) return [];
  return [item];
};
