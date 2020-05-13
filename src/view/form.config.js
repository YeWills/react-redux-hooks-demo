
export default {
    fields:[
        {name:'useName',title:'user name',type:'input',required:true},
        {name:'region',title:'region',type:'select',options:[{
            lable:'China',value:'china',
            // eslint-disable-next-line no-dupe-keys
            lable:'USA',value:'usa',
        }] ,required:true},
        {name:'passWord',title:'password',type:'input',rule:e=>e.length>6},
    ],
}