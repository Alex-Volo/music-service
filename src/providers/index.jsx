import React from 'react';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContextProvider';

export const AppProvider = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <UserContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </UserContextProvider>
      </Provider>
    </React.StrictMode>
  );
};
