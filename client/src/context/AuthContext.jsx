import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispach] = useReducer(authReducer, { user: null });

  console.log("AuthContex state: ", state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispach,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
