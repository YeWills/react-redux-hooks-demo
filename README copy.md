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
