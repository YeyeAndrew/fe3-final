import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChars] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams();
  const { state } = useGlobalContext();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios(url).then((res) => {
      setChars(res.data)
    });
  }, [url]);

  return (
    <div className={`detail-container ${state.theme ? "" : "dark"}`}> 
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>NAME: {char.name}</h3>
      <h3>EMAIL: {char.email}</h3>
      <h3>PHONE-NUMBER: {char.phone}</h3>
      <h3>WEB-SITE: <a href={`https://${char.website}`} target="_blank" rel="noopener noreferrer">{char.website}</a></h3>
      
    
    </div>
  );
};

export default Detail;