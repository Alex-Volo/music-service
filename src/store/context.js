const { createContext } = require('react');

export const getUserFromLS = () => {
  const userJSON = localStorage.getItem('user');

  if (userJSON === null) {
    return undefined;
  }
  try {
    return JSON.parse(userJSON);
  } catch (e) {
    localStorage.removeItem('user');
    return null;
  }
};

export const UserContext = createContext({
  currentUser: getUserFromLS(),
  setCurrentUser: () => {},
});
