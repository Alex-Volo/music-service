import { createContext, useState } from 'react';
import { getUserFromLS } from 'helpers/helpers.js';

export const UserContext = createContext({
  currentUser: getUserFromLS(),
  setCurrentUser: () => {},
  logout: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserFromLS());

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = { currentUser, setCurrentUser, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
