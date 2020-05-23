
const formConfig = {
  fields: [
    { 
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
      type: 'select',
      defaultValue:'',
      validate:[[(value,formValue)=>{
        if(String(value).length< String(formValue['useName']).length){
          return 'no small useName';
        }
        return ''
      }, ['useName']]],
      options: [{
        lable: 'china',
        value: 'china',
      }, {
        lable: 'usa',
        value: 'usa',
      }, {
        lable: 'englend',
        value: 'englend',
      }],
      required: true
    },
    { 
      name: 'passWord', 
      defaultValue:'111', 
      title: 'password', 
      type: 'input', 
      rule: (e) => e.length > 6 
    },
  ],
};

export default formConfig;
