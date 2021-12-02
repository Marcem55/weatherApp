import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

export default function About(){
    return(
        <div className='about-info'>
            <p className='info'>Les presento Henry Weather App, mi primer SPA (single page aplication) creada mediante React, la cual nos brinda información del clima de las ciudades del mundo, manejando los datos de las mismas mediante la API de Open Weather Map.
            <hr />
            Marcelo Malacalza<br />
            Estudiante de Full Stack Developer en Soy Henry!
            </p>
            <NavLink to='/'>
                <button className='go-home'>Volver al inicio</button>
            </NavLink>
        </div>
    )
}