import React from "react";
import { useLocalObservable } from "mobx-react";
import { createGPRMStore } from "./gprmStore";

const GPRMContext = React.createContext(null);

export const GPRMProvider = ({ children }) => {
  const gprmStore = useLocalObservable(createGPRMStore);

  return (
    <GPRMContext.Provider value={gprmStore}>{children}</GPRMContext.Provider>
  );
};

export const useGPRMStore = () => React.useContext(GPRMContext);
