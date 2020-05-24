import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field/Field';
import { Btn } from './utils';
import v, {validateForm} from './validate';
import './style.less';


export default function EnForm(props) {
  const { config, onSubmit: propsOnSubmit, Btn } = props;
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
  const content = config.fields.map((field) => {
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

  return (
    <div className="enhance-form">
      {content}
      <Btn onSubmit={onSubmit} formValue={formValue} setFormValue={setValue} onReset={onReset} />
    </div>
  );
}

EnForm.defaultProps = {
  Btn
};
