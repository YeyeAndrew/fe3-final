import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [chars, setChars] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      setChars(res.data);
    });
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {chars.map((char) => (
          <Card key={char.id}id={char.id} name={char.name} username={char.username}/>
        ))}
      </div>
    </main>
  );
};

export default Home;