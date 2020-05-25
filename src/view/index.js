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

  const CustomBtn = customBtn();

  return (
    <div className="app-conten">
      <EnForm
        title="登录"
        config={formConfig}
        rows={8}
        onSubmit={onSubmit}
        layoutMode="custom"
        // Btn={CustomBtn}
      >
        <div >
          <div>
            <div>
              随意排列
            </div>
            <div>
            <EnForm.EnField className="form-cell" enfield name="editname" />
            </div>
          </div>
        </div>
        <p>天若有情天亦老</p>
        <EnForm.EnField className="form-cell" enfield name="useName" />
        <div className="region">
          <div>123456---</div>
          <EnForm.EnField className="form-cell" enfield name="region" />
          <div>1258----</div>
          <EnForm.EnField className="form-cell" enfield name="passWord" />
        </div>
        <EnForm.EnField className="form-cell" enfield name="select" />
     </EnForm>
    </div>
    
  );
}
