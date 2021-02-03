import React from 'react';
import axios from 'axios';


const BasicExample = () => {
  const onPost = () => {
    // 为给定 ID 的 user 创建请求
    axios.get('/j/suggest_v2')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>this. is big</div>
      <button onClick={onPost}>发请求</button>
    </div>
  );
};


export default BasicExample;
