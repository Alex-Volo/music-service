const { createContext } = require('react');
import { getUserFromLS } from 'helpers/helpers.js';

export const UserContext = createContext({
  currentUser: getUserFromLS(),
  setCurrentUser: () => {},
});

