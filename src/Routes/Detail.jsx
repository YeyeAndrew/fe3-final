import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChars] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams();
  //console.log("params es:", id);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios(url).then((res) => {
      console.log("res data" + res.data);
      setChars(res.data)
    });
  }, [url]);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{char.name}</h2>
      <h4>{char.email}</h4>
      <h4>{char.phone}</h4>
      <a href={`https://${char.website}`} target="_blank" rel="noopener noreferrer">{char.website}</a>
      

    </>
  );
};

export default Detail;