import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import EInput from '../EInput/EInput';
import Eselect from '../Eselect/Eselect';
import v from '../validate';
import './style.less';


const Comp = {
  input: EInput,
  select: Eselect,
};

const Field = (props) => {
  const { formDisplay, field, formValue, setValue, startValidate, errorMsgs, setErrMsgs } = props;
  const { name, required, Render } = field;
  const TypeField = Comp[field.type];


  const defaultGetNewFormValue = (value)=>{
    return { ...formValue, [name]: value }
  }  
  
  const defaultValidate = (value)=>{
    if(startValidate){
      const errorMsg =  v(field, value, formValue);
      setErrMsgs({...errorMsgs,...errorMsg})
     }
  }
  

  const onChange = (value,getNewFormValue = defaultGetNewFormValue, validateHandle = defaultValidate) => { 
      validateHandle(value, field, props)
      setValue(getNewFormValue(value, field, props));
    };

  const {disabled, readOnly, delete:del} = formDisplay[name]
  if(del) return '';

  return (
    <div className={classnames("field-cell", {required}, {['error-cell']:!!errorMsgs[name]})}>
      <span className="field-title">{field.title}</span>
      <div className="field-value">
        {
          Render ?
          <Render
            value={formValue[name] || ''}
            onChange={onChange}
            field={field}
            {...props}
          />
          :
          <TypeField
            formValue={formValue}
            value={formValue[name] || ''}
            onChange={onChange}
            field={field}
            disabled={disabled}
            readOnly={readOnly}
        />
        }
        
        <div className="error">{errorMsgs[name]}</div>
      </div>
    </div>
  );
};

export default Field;
