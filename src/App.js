import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import CourseList from './components/CourseList';

function App() {
  console.log(12)
  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}


export default App;
