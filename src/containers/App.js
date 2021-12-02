import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import { Route } from 'react-router-dom';

export default function App() {
  const [cities, setCities] = useState([]);
  let apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(respuesta => respuesta.json())
      .then(resultado => {
          if (resultado.main !== undefined) {
            const nuevaCiudad = {
              min: Math.round(resultado.main.temp_min),
              max: Math.round(resultado.main.temp_max),
              img: resultado.weather[0].icon,
              id: resultado.id,
              wind: resultado.wind.speed,
              temp: resultado.main.temp,
              name: resultado.name,
              weather: resultado.weather[0].main,
              clouds: resultado.clouds.all,
              latitud: resultado.coord.lat,
              longitud: resultado.coord.lon
            };
            if (cities.find((ciudad) => ciudad.id === nuevaCiudad.id)) {
              alert('La ciudad ya se encuentra en pantalla!');
            } else setCities(oldCities => [...oldCities, nuevaCiudad]);
          } else {
            alert('Ciudad no encontrada');
          }
      }
      )
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className = "App">
      <Route path='/' render={() => <Nav onSearch = {onSearch}/>}/>
      <Route exact path= '/about' component={About}/>
      <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
      <Route exact path='/' render={() => <Cards cities = {cities} onClose = {onClose}/>}/>
    </div>
  );
}
