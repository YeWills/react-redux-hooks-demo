import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';

import Field from './Field/Field';
import { Btn, getLayout, toArray } from './utils';
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

  let content = '';
  if (layoutMode === 'default') {
    content = config.fields.map((field) => {
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
    content = getLayout(content, rows);
  }

  if (layoutMode === 'custom') {
    const getProps = (props) => {
      const { name } = props;
      return {
        ...props,
        key: `enfield${name}`,
        formDisplay,
        setDisplay,
        field: configInfo.current[name],
        formValue,
        setValue,
        errorMsgs: errMsgs,
        setErrMsgs,
        startValidate: startValidate.current,
      };
    };
    content = children.map((cell, index) => {
      if (cell.props.enfield) {
        return React.cloneElement(cell, getProps(cell.props));
      }
      const cellChilds = toArray(cell.props.children);
      if (!cellChilds.find((t) => _.get(t, 'props.enfield'))) return cell;
      const newChildren = cellChilds.map((t) => {
        if (_.get(t, 'props.enfield')) {
          return React.cloneElement(t, getProps(t.props));
        }
        return t;
      });
      return React.cloneElement(cell, { ...cell.props, children: newChildren, key: index });
    });
  }


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

  return (
    <div className={classNames('enhance-form', { blockDisplay: layoutMode === 'custom' })}>
      <div className="enform-content">
        {content}
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
