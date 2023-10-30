import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
