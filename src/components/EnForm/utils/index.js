import React, { useState, useRef, useEffect } from 'react';


// eslint-disable-next-line import/prefer-default-export
export const Btn = ({ onSubmit, onCancle }) => {
  return (
    <div className="btn-wrap">
      <button onClick={onCancle}>Cancel</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
