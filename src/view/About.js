import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Big() {
  return (
    <div>
      <h2>Big</h2>
    </div>
  );
}

function Test() {
  return (
    <div>
      <h2>Test</h2>
    </div>
  );
}


function BasicExample() {
  return (
    <div>
      <div>ablougt 固定</div>
      <div>ablougt 固定</div>
      <div>ablougt 固定</div>

      <Route path="/about/test" component={Test} />
      <Route path="/about/big" component={Big} />
    </div>
  );
}


export default BasicExample;
