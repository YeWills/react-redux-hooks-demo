import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Eselect(props) {
  const { value, onChange: propsOnChange, field } = props;
  const { options } = field;
  const onChange = (e) => {
    propsOnChange(e.target.value);
  };
  return (
    <select onChange={onChange} value={value}>
      {
        options.map((t) => {
          return <option key={t.value} value={t.value}>{t.lable}</option>;
        })
      }
    </select>
  );
}
