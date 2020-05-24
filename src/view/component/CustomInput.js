import React, { useState } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

export default (props) => {
  const { value, onChange: propsOnChange, setDisplay } = props;
  const getNewFormValue = (value, field, {formValue})=>{
    return { ...formValue, [field.name]: value, passWord:`${value} - custom set` }
  }  
  const onChange = (e) => { 
    propsOnChange(e.target.value, getNewFormValue);
  }; 

  const [text, setText] = useState('hide')

  const onClick = ()=>{
      setText(text === 'hide'? 'show': 'hide');
      setDisplay((formDisplay)=> {
          const deleteStatus = _.get(formDisplay, 'passWord.delete');
          const newa =  {...formDisplay, passWord:{...formDisplay.passWord, delete: !deleteStatus}};
          console.log(newa)
          return newa
      })
  }
  return (
    <>
    <input
      value={value}
      onChange={onChange}
    />
    <span onClick={onClick}>{text} password</span>
    </>
  );
}
