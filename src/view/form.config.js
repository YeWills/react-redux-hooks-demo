import CustomInput from './component/CustomInput';

const formConfig = {
  fields: [
    { 
      name: 'editname', 
      defaultValue:'6',
      title: 'this custom field', 
      Render: CustomInput,
      validate:[[(value,formValue)=>{
        if(String(value).length> String(formValue['region']).length){
          return '不能比region长';
        }
        return ''
      }, ['region']]],
      required: '这是必填项' 
    },  { 
      name: 'useName', 
      defaultValue:'',
      title: 'user name', 
      type: 'input', 
      validate:[[(value,formValue)=>{
        if(String(value).length> String(formValue['region']).length){
          return '不能比region长';
        }
        return ''
      }, ['region']]],
      required: '这是必填项' 
    },
    { name: 'region',
      title: 'region',
      type: 'input',
      defaultValue:'',
      validate:[[(value,formValue)=>{
        if(String(value).length< String(formValue['useName']).length){
          return 'no small useName';
        }
        return ''
      }, ['useName', 'editname']]],
      required: true
    },
    { 
      name: 'passWord', 
      defaultValue:'111', 
      title: 'password', 
      type: 'input', 
      required: true
    },
    { name: 'select',
    title: 'place',
    type: 'select',
    defaultValue:'home',
    options: [{
      lable: 'china',
      value: 'china',
    }, {
      lable: 'usa',
      value: 'usa',
    }, {
      lable: 'englend',
      value: 'englend',
    }, {
      lable: 'home',
      value: 'home',
    }],
    required: true
  },
  
  ],
};

export default formConfig;
