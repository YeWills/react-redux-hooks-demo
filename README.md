## react-redux-hooks form 二次封装
此分支用于form的二次封装，对应有一篇封装博客，未完等待补充。

## use
```
npm start;

run http://localhost:3000/
```


control uncontrol input 


自定义 submit cancel 
自定义 getjson btn

自定义样式排列(提供几种默认样式)

对业务组件对封装也是form的工作之一


下一个要做的，不是我业务封装过的组件，因为现在的form都使用了E开头的form专有封装的组件，如何兼容自定义组件。

需求清淡：
可以根据我之前项目的场景来做需求；

form表单中，有个一个get json 按钮，获取的数据用于 设置form表单的初始值；

设置form为一个完全受控是关键，所谓完全受控会影响性能，一般是一个假命题。因为form的数据很难打到上白个field。

