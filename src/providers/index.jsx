import React from 'react';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContextProvider';
import { ThemeContextProvider } from './ThemeProvider';

export const AppProvider = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <UserContextProvider>
          <ThemeContextProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeContextProvider>
        </UserContextProvider>
      </Provider>
    </React.StrictMode>
  );
};
