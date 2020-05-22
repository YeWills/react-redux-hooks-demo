import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EInput from './EInput/EInput';
import './style.less';

const Comp = {
  input: EInput,
  select: EInput,
};
export default function EnForm(props) {
  const { config } = props;
  console.log(config);
//   const formValue = useRef({});
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
    const TypeField = Comp[field.type];
    const { name } = field;
    return (
      <div key={field.name} className="field-cell">
        <span className="field-title">{field.title}</span>
        <div className="field-value"><TypeField formValue={formValue} value={formValue[field.name]} onChange={(value) => { setValue({ ...formValue, [name]: value }); }} /></div>
      </div>
    );
  });
  return (
    <div className="enhance-form">
      {content}
    </div>
  );
}
