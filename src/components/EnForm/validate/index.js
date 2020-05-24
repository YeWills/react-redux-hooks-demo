import rules from './rule';
import { toArray } from '../utils';

class ValidateHelper{
    constructor(formConfig){
        if(!ValidateHelper.instance){
            ValidateHelper.instance = this;
            this.relateFieldMaps = this.getRelateFieldMap(formConfig);
        }
        return ValidateHelper.instance;
    }
    getRelateFieldMap = (formConfig)=>{
        return formConfig.fields.reduce((acc, field)=>{
            const {validate : customValidates} = field;
            toArray(customValidates).forEach((customValidate)=>{
                if(!customValidate[1]) return;
                customValidate[1].forEach(dependFieldName=>{
                    if(!acc[dependFieldName]) acc[dependFieldName] = [];
                    acc[dependFieldName].push(field);
                })
            })
            return acc;
        }, {})
    }
}

const validateField = (field, value, formValue)=>{
    const {validate}=field;
    const rulesInfo = Object.entries(rules);
    let needValidates = rulesInfo.reduce((acc,t)=>{
        const [ruleName, ruleFn]= t;
        if(field[ruleName]){
            if(typeof field[ruleName] === 'string'){
                return acc.concat(ruleFn.bind(null, value, field[ruleName]));
            }
            return acc.concat(ruleFn.bind(null, value));
        }
        return acc;
    }, [])
    let customValidate = []
    if(validate) customValidate = (customValidate.concat(validate)).map(fn=>toArray(fn)[0].bind(null, value, formValue))
    needValidates = needValidates.concat(customValidate);
    
    let errMsg = '';
    needValidates.find(rultFn=> {
        errMsg = rultFn();
        return errMsg
    });
    return errMsg;
}
const validate = (field, value, formValue)=>{
    const relativeFields = (new ValidateHelper()).relateFieldMaps[field.name];
    const needValidFields = [field].concat(relativeFields || []);

    const updateFormValue = {...formValue, [field.name]: value};
    const reult = needValidFields.reduce((errMsgs, itemField)=>{
        const fieldName = itemField.name;
        errMsgs[fieldName] = validateField(itemField, updateFormValue[fieldName], updateFormValue);
        return errMsgs;
    }, {})

    return reult;
}

export default validate;

export const validateForm = (config, formValue, formDisplay)=>{
    new ValidateHelper(config);
   const displayFields =  config.fields.filter(field=> {
       return !formDisplay[field.name].delete
   })
   return displayFields.reduce((acc, field)=>{
        const name = field.name;
        acc[name] = validateField(field, formValue[name], formValue);
        return acc;
    },{})
}
