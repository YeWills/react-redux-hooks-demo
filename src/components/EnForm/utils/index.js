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

export const getColumnLength = (length, rows)=>{
  const columnLength = length/rows;
  const num = length%rows;
  if(num === 0) return columnLength;
  if(length > rows*columnLength) return columnLength+1;
  return columnLength;
}

// eslint-disable-next-line import/prefer-default-export
export const getLayout = (fields, rowsLength)=>{
  const columnLength = getColumnLength(fields.length, rowsLength);
  const layouts = [];
  let index = 0;
  while(index < columnLength){
    const lastIndex = rowsLength*(index+1)-1;
    if(index === columnLength -1 ) lastIndex = fields.length-1;
    layouts.push(
      <section className="column" key={index}>
        {fields.slice(rowsLength*index, lastIndex)}
      </section>
    )
    index++;
  }
  return layouts;
}
