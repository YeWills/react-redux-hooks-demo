import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';

import Field from './Field/Field';
import EnhanceField from './Field/EnhanceField';
import { Btn, getLayout, toArray, ThemeContext } from './utils';
import v, { validateForm } from './validate';
import './style.less';


export default function EnForm(props) {
  const { config, onSubmit: propsOnSubmit, Btn, rows, layoutMode, children } = props;
  const configInfo = useRef({});
  const startValidate = useRef(false);
  const [errMsgs, setErrMsgs] = useState({});
  const [formDisplay, setDisplay] = useState(() => {
    return config.fields.reduce((acc, field) => {
      const { name, disabled, readOnly } = field;
      if (!acc[name]) acc[field.name] = {};
      acc[name] = {
        disabled,
        readOnly,
      };
      configInfo.current[name] = field;
      return acc;
    }, {});
  });

  const [formValue, setValue] = useState(() => {
    return config.fields.reduce((newValue, item) => {
      const { name, defaultValue } = item;
      // eslint-disable-next-line no-param-reassign
      newValue[name] = defaultValue;
      return newValue;
    }, {});
  });

  const onSubmit = () => {
    startValidate.current = true;
    const currentErrMsgs = validateForm(config, formValue, formDisplay);
    const isValidatePass = Object.values(currentErrMsgs).every((err) => !err);
    setErrMsgs(currentErrMsgs);
    if (!isValidatePass) return;
    propsOnSubmit && propsOnSubmit(formValue);
  };

  const onReset = () => {
    setValue({});
    setErrMsgs({});
  };

  const getContent = () => {
    if (layoutMode === 'custom') {
      const fieldExtraProps = {
        formDisplay,
        setDisplay,
        configInfo: configInfo.current,
        formValue,
        setValue,
        errorMsgs: errMsgs,
        setErrMsgs,
        startValidate: startValidate.current,
      };
      return (
        <ThemeContext.Provider value={fieldExtraProps}>
          {children}
        </ThemeContext.Provider>
      );
    }

    const content = config.fields.map((field) => {
      return (
        <Field
          key={field.name}
          formDisplay={formDisplay}
          setDisplay={setDisplay}
          field={field}
          formValue={formValue}
          setValue={setValue}
          errorMsgs={errMsgs}
          setErrMsgs={setErrMsgs}
          startValidate={startValidate.current}
        />
      );
    });
    return getLayout(content, rows);
  };


  return (
    <div className={classNames('enhance-form', { blockDisplay: layoutMode === 'custom' })}>
      <div className="enform-content">
        {getContent()}
      </div>
      <Btn onSubmit={onSubmit} formValue={formValue} setFormValue={setValue} onReset={onReset} />
    </div>
  );
}

EnForm.defaultProps = {
  Btn,
  rows: 8,
  layoutMode: 'default',
};

EnForm.Field = Field;
EnForm.EnField = EnhanceField;
