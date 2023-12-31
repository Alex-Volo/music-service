import { createContext, useState } from 'react';
import { getUserFromLS } from 'helpers/helpers.js';

export const UserContext = createContext({
  currentUser: getUserFromLS(),
  setCurrentUser: () => {},
  logout: () => {},
  login: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserFromLS());

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  }

  const value = { currentUser, login, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
