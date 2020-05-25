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

  // const CustomBtn = customBtn();

  return (
    <div className="app-conten">
      <EnForm
        title="登录"
        config={formConfig}
        onSubmit={onSubmit}
        layoutMode="custom"
      >
        <div >
          <div>
            <div>
              随意排列,任意写入内容
            </div>
            <div>
            <EnForm.EnField className="form-cell" name="editname" />
            </div>
          </div>
        </div>
        <p>hellow world</p>
        <EnForm.EnField className="form-cell" name="useName" />
        <div className="region">
          <div>任意位置</div>
          <EnForm.EnField className="form-cell" name="region" />
          <div>自由放置</div>
          <EnForm.EnField className="form-cell" name="passWord" />
        </div>
        <EnForm.EnField className="form-cell" name="select" />
     </EnForm>
    </div>
  );
}
