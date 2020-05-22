import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function EInput(props) {
  const { value, onChange: propsOnChange } = props;
  const [a, seta] = useState(1)
console.log(value)
console.log(props.formValue)
  return (
    <input
      value={value}
      onChange={(e) => {
        propsOnChange(e.target.value);
      }}
    //   onChange={(e) => {
    //     seta(e.target.value);
    //   }}
    />
  );
}
