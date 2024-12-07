import axios from "axios";
import { useReducer, useEffect, useContext, createContext, useMemo } from "react";
import { reducer } from "../../reducers/reducer";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const lsTheme = JSON.parse(localStorage.getItem("theme")) || true;

export const initialState = {
  theme: lsTheme,
  favs: lsFavs,
  chars: []
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  const url = "https://jsonplaceholder.typicode.com/users";
  

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type: "GET_CHARS", payload: res.data});
    });
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    const newTheme = !state.theme;
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }, [state.theme]);

  const toggleMode = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const value = useMemo(() => ({state, dispatch, toggleMode}), [state, dispatch]);
  
  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => useContext(ContextGlobal);