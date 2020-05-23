const validate = (field, value)=>{
    const {required} = field;
    if(required){
        if(value && value.trim()){
            return '';
        }
        return 'required'
    }
    return '';
}

export default validate;

export const validateForm = (config, formValue)=>{
   return config.fields.reduce((acc, field)=>{
        const {name} = field;
        acc[name] = validate(field, formValue[name]);
        return acc;
    },{})
}
