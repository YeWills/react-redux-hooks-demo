import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import View from './view';

function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}


export default App;
