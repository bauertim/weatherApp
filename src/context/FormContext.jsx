import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === null) {
    throw Error("cant use it outside of Formcontextprovider");
  }
  return context;
}
