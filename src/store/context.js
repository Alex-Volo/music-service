const { createContext } = require('react');

export const UserContext = createContext({
  currentUser: null,
  toggleUser: function (user) {
    this.currentUser = { ...user };
  },
});
