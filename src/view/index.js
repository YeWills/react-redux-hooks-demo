import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formConfig from './form.config';
import EnForm from '../components/EnForm/EnForm';
import {customBtn} from './component/customBtn';
import './style.less';


export default function View() {
  const onSubmit = (form) => {
    console.log('submit');
    console.log(form);
  };

  return (
    <div className="app-conten">
      <EnForm
        title="登录"
        config={formConfig}
        onSubmit={onSubmit}
      />
    </div>
  );
}
