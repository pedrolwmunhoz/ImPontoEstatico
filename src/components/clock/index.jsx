// Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalID);
  }, []); // O segundo argumento vazio assegura que o useEffect é executado apenas uma vez após a montagem inicial

  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  const dayOfWeek = daysOfWeek[time.getDay()];
  const day = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className='flex text-center flex-col text-white font-bold'>
      <h1>{`${dayOfWeek}, ${day} de ${month} de ${year}`}</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Clock;
