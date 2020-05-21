export default {
  fields: [
    { name: 'useName', title: 'user name', type: 'input', required: true },
    { name: 'region',
      title: 'region',
      type: 'select',
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
    { name: 'passWord', title: 'password', type: 'input', rule: (e) => e.length > 6 },
  ],
};
