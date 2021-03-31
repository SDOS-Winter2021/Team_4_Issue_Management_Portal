import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const authContextValue = {
    loggedIn,
    setLoggedIn,
    userData,
    setUserData,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
