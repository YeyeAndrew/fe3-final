import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalContext();
  return (
    <div className={state.theme ? "light" : "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((char) => (
          <Card key={char.id} char={char}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
