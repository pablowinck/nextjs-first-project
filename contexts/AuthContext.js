import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return;
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
