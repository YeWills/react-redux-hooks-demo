import React, { useState } from 'react';

export default function EInput(props) {
  const { value, onChange: propsOnChange } = props;
  return (
    <input
      value={value}
      onChange={(e) => {
        propsOnChange(e.target.value);
      }}
    />
  );
}
