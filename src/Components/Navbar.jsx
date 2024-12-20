import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state: { theme }, toggleMode } = useGlobalContext();

  return (
    <nav className= {theme ? "" : "dark"}>
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
      <button className="button-theme" onClick={toggleMode}>
        <img src={theme ? "/images/moon-solid.svg" : "/images/sun-regular.svg"} alt="theme icon" />
      </button>
    </nav>
  );
};

export default Navbar;