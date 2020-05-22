
const formConfig = {
  fields: [
    { name: 'useName', 
    defaultValue:'111',
    title: 'user name', type: 'input', required: true },
    { name: 'region',
      title: 'region',
      type: 'select',
      defaultValue:'111',
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
    { name: 'passWord', defaultValue:'111', title: 'password', type: 'input', rule: (e) => e.length > 6 },
  ],
};

export default formConfig;
