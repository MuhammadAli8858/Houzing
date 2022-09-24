import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, []);
  return (
    <PropertiesContext.Provider value={[state, dispach]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
