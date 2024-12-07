import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ char }) => {
  const {dispatch, state: {favs}} = useGlobalContext();
  
  const findFav = favs.find((fav) => fav.id === char.id);
  
  
  const toggleFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: findFav ? "REMOVE_FAV" : "ADD_FAV", payload: char});
  };
  
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentist/${char.id}`}>
        <img className="img" src="/images/doctor.jpg" alt={`Profile of ${char.name}`}/>
      </Link>
      <h3>{char.name}</h3>
      <h4>{char.username}</h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button className="star" onClick={toggleFav}>
      <img src={findFav ? "/images/star-solid.svg" : "/images/star-regular.svg"} alt="favorite icon" />
      </button>

    </div>
  );
};

export default Card;
