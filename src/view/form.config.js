import CustomInput from './component/CustomInput';

const formConfig = {
  fields: [
    { 
      name: 'editname', 
      defaultValue:'6',
      title: 'edit user name', 
      Render: CustomInput,
      validate:[[(value,formValue)=>{
        if(String(value).length> String(formValue['region']).length){
          return 'hellow region';
        }
        return ''
      }, ['region']]],
      required: '这是必11填的。。。' 
    },  { 
      name: 'useName', 
      defaultValue:'6',
      title: 'user name', 
      type: 'input', 
      validate:[[(value,formValue)=>{
        if(String(value).length> String(formValue['region']).length){
          return 'no big region';
        }
        return ''
      }, ['region']]],
      required: '这是必填的。。。' 
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
  { 
    name: 'girl1', 
    title: 'girl1', 
    type: 'input', 
  },
  { 
    name: 'girl2', 
    title: 'girl2', 
    type: 'input', 
  },
  { 
    name: 'girl3', 
    title: 'girl3', 
    type: 'input', 
  },
  { 
    name: 'girl4', 
    title: 'girl4', 
    type: 'input', 
  },
  { 
    name: 'girl5', 
    title: 'girl5', 
    type: 'input', 
  },
  { 
    name: 'girl6', 
    title: 'girl6', 
    type: 'input', 
  },
  { 
    name: 'girl7', 
    title: 'girl7', 
    type: 'input', 
  },
  { 
    name: 'girl8', 
    title: 'girl8', 
    type: 'input', 
  },
  { 
    name: 'girl9', 
    title: 'girl9', 
    type: 'input', 
  },
  { 
    name: 'girl10', 
    title: 'girl10', 
    type: 'input', 
  },
  ],
};

export default formConfig;
