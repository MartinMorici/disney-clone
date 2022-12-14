import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import App from './App';

import './index.css';




const container = document.getElementById('root');
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

