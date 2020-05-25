import React, { useState, useRef, useEffect, useContext } from 'react';
import Field from './Field';
import { ThemeContext } from '../utils';


const getProps =(ownProps, context)=>{
    const {name} = ownProps;
    const {formDisplay, setDisplay, formValue,
        setValue, errorMsgs, setErrMsgs,startValidate, configInfo}=context;
    return {
    formDisplay,
    setDisplay, 
    field:configInfo[name], 
    formValue, 
    setValue, 
    errorMsgs,
    setErrMsgs,
    startValidate, 
    ...ownProps,
    }
}


const EnhanceField = (props)=>{
    console.log(props)
    const context = useContext(ThemeContext);
    const allProps = getProps(props, context)
    return <Field {...allProps} />
}

export default EnhanceField;