import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAsideOpen, setAside] = useState(false);
  return (
    <MyContext.Provider value={{ isAsideOpen, setAside }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
