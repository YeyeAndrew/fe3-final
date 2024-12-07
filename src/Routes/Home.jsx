import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalContext();

  return (
    <main className={state.theme ? "" : "dark"}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.chars.map((char) => (
          <Card key={char.id} char={char}/>
        ))}
      </div>
    </main>
  );
};

export default Home;