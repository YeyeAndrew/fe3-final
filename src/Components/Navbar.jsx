import React, { useReducer } from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const initialState = { theme: "ligth", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ligth":
      return { theme: "ligth", data: [] };
    case "dark":
      return { theme: "ligth", data: [] };
    case "reset":
      return { theme: "ligth", data: [] };
    default:
      throw new Error();
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch( {type: "ligth"} )}>Change Theme</button>
    </nav>
  );
};

export default Navbar;
