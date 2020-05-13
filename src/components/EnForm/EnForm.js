import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EInput from './EInput/EInput';
import './style.less';

const Comp = {
    input:EInput,
    select:EInput,
}
export default function EnForm(props){
    const {config}=props;
    const content = config.fields.map(field=>{
        console.log(field)
        const TypeField = Comp[field.type];
        return (
            <div key={field.name} className="field-cell">
                <label className="field-title">{field.title}</label>
                <div className="field-value"><TypeField /></div>
            </div>
        )
    })
    return (
        <div className="enhance-form">
            {content}
        </div>
    )
}