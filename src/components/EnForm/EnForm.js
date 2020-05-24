import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field/Field';
import { Btn, getLayout } from './utils';
import v, {validateForm} from './validate';
import './style.less';


export default function EnForm(props) {
  const { config, onSubmit: propsOnSubmit, Btn, rows } = props;
  const startValidate = useRef(false);
  const [errMsgs, setErrMsgs] = useState({});
  const [formDisplay, setDisplay] = useState(()=>{
    return config.fields.reduce((acc, field)=>{
      const{name, disabled, readOnly} = field;
      if(!acc[name]) acc[field.name] = {}
      acc[name] = {
        disabled,
        readOnly,
      }
      return acc;
    }, {})
  });
  useEffect((t) => {
    config.fields;
  }, []);
  const [formValue, setValue] = useState(() => {
    return config.fields.reduce((newValue, item) => {
      const { name, defaultValue } = item;
      newValue[name] = defaultValue;
      return newValue;
    }, {});
  });
  let content = config.fields.map((field) => {
    return <Field 
             key={field.name} 
             formDisplay={formDisplay} 
             setDisplay={setDisplay} 
             field={field} 
             formValue={formValue} 
             setValue={setValue} 
             errorMsgs={errMsgs}
             setErrMsgs={setErrMsgs}
             startValidate={startValidate.current} 
          />;
  });

  content = getLayout(content, rows);

  const onSubmit = () => {
    startValidate.current = true;
    const currentErrMsgs = validateForm(config, formValue, formDisplay);
    const isValidatePass = Object.values(currentErrMsgs).every(err=>!err);
    console.log(currentErrMsgs)
    setErrMsgs(currentErrMsgs);
    if(!isValidatePass) return;
    propsOnSubmit && propsOnSubmit(formValue);
  };

  const onReset = ()=>{
    setValue({});
    setErrMsgs({});
  }

  console.log(content)

  return (
    <div className="enhance-form">
      <div className="enform-content">
        {content}
      </div>
      <Btn onSubmit={onSubmit} formValue={formValue} setFormValue={setValue} onReset={onReset} />
    </div>
  );
}

EnForm.defaultProps = {
  Btn,
  rows:8
};
