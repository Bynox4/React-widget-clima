import React, { useState } from "react";

import '../styleSheets/weatherForm.css'

function WeatherForm({ onChangeCity }){
  const [city, setCity] = useState('');

  function onChange(e){
    setCity(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    if(!city || city !== ''){
      onChangeCity(city);
    }
  }

  return(
    <form onSubmit={handleSubmit} className='container'>
        <input type="text" onChange={onChange} className='input' />
    </form>
    );
}

export default WeatherForm;