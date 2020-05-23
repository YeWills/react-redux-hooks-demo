import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import EInput from '../EInput/EInput';
import v from '../validate';
import './style.less';

const Comp = {
  input: EInput,
  select: EInput,
};

const Field = ({ field, formValue, setValue, startValidate, errorMsgs, setErrMsgs }) => {
  const TypeField = Comp[field.type];
  const { name, required } = field;
  // const [errMsg, setErrMsg] = ('');
  

  const onChange = (value) => { 
      if(startValidate){
       const errorMsg =  v(field, value);
       setErrMsgs({[name]: errorMsg})
      }
      console.log({ ...formValue, [name]: value })
      setValue({ ...formValue, [name]: value });
    };


  return (
    <div key={field.name} className={classnames("field-cell", {required}, {['error-cell']:!!errorMsgs[name]})}>
      <span className="field-title">{field.title}</span>
      <div className="field-value">
        <TypeField
          formValue={formValue}
          value={formValue[field.name] || ''}
          onChange={onChange}
        />
        <div className="error">{errorMsgs[name]}</div>
      </div>
    </div>
  );
};

export default Field;
