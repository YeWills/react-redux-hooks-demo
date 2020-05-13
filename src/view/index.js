import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formConfig from './form.config';
import EnForm from '../components/EnForm/EnForm';


export default function View() {

  const onSubmit = ()=>{
    console.log('submit')
  }
  return (
      <EnForm
        title="登录"
        config={formConfig}
        onSubmit={onSubmit}
      />
  );
}
