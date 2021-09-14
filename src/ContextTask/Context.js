import React, { useReducer } from "react";
import { AuthReducer, initialState} from './Reducer'
 
const AuthStateContext = React.createContext(); //Manejo del estado
const AuthDispatchContext = React.createContext(); // Envios del estado

// Creacion de custom Hooks para pasar los estados entre componentes
export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) { // esto sale en una linea y deberia ser solo if(context)
    throw new Error("useAuthState must be used within a AuthProvider");
  }
 
  return context;
}
 
export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) { // lo mismo de arriba
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
 
  return context;
}

// Logica de manejo de la app (Permite usar el estado en los componentes hijos)
export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
