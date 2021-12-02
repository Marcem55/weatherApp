import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className='card'>
      <button className='closeIcon' onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div className='card-title'>
        <p>Mínima</p>
        <p>Máxima</p>
      </div>
      <div className='card-title'>
        <p>{min}°C</p>
        <p>{max}°C</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen del clima" />
      <NavLink className='more-info' to={`/ciudad/${id}`}>
        <p className='detalles'>Ver detalles</p>
      </NavLink>
      </div>);
};
