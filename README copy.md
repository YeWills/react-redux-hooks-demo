## validate
### filed 的rule可能有多个
因为有多个，所以每个field的validate应该是遍历的方式去验证每个rule。
### validate 增加相关联映射 filed 检测
目前觉得最优解方案是定义自定义validate的时候，写明依赖的组件；
两个相互依赖检测的组件，都按常规定义好验证方法和依赖组件，虽然验证方法可能是互斥；
但考虑到依赖的关系可能并非两个field的关系，可能是三个field，这个时候，验证方法可能不会是互斥关系；
此时就需要最后按常规每个field下都定义好验证方法。
而且这种自定义方式不会出现很多，所以没必要做一层互斥优化。
相关方法为demo中的：
```js
class ValidateHelper{
    constructor(formConfig){
            this.relateFieldMaps = this.getRelateFieldMap(formConfig);
        }
        return ValidateHelper.instance;
    }
    getRelateFieldMap = (formConfig)=>{
  
    }
}
```
自定义规则写法：
```js
{   name: 'region',
    title: 'region',
    type: 'select',
    defaultValue:'',
    validate:[
        [
            (value,formValue)=>{
                if(String(value).length< String(formValue['useName']).length){
                  return 'no small useName';
                }
            return ''
            }, 
            //希望同时验证 useName 的验证规则
            ['useName']
         ]
    ],
```

### validate form 与 field的不同
validate form的时候，是对所有field的全量验证，不需要考虑每个field验证的依赖映射关系；
单个field onchange 验证的时候，考虑性能，不对整个form进行检测，而只检测当前field的规则 和 与field验证有关联映射关系的field的验证。

### form的三个state
- errMsgs -- 用来控制错误信息
- formValue  -- 用来控制form value值
- formDisplay  -- 用来控制field的显示、隐藏、删除、readonly、disabled，之所以把这个显示信息的状态
由field提升到form上，因为提升到form后，所有的filed都能共享这一信息，并且修改；



## 单独提取Field

## 将form内的field设计为完全受控

## 每个field的name唯一性

## form 配置model 

## 将自定义form形成一套自己的特色

## 自定义field
自定义field 对form的影响主要在这两件事情：
设置form的新的value值；
设置form的新的验证error信息；
由于验证是以value的参考标准的，不会考虑该组件是否为自定义或标准组件，所以自定义组件的验证，基本上不用重新设计，套用整体的验证即可；
因此剩下要做的，唯一就是设置新的error值；

自定义field 还要做的事情，隐藏(删除)／显示field， readonly／disable field；


