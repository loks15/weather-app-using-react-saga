import React, { useEffect } from "react";
import { useState } from "react";
import './Weather.css';

import { connect } from "react-redux"

import {
  initWeatherData,
} from "../redux/Weather/actions";


function WeatherDetails(props) {

  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const handleSearchText = (value) => {
    setSearch(value)
    
  }

  const handleSearch = async () => {
    props.initWeatherData({ search: search })
  }

  useEffect(() => {
    setWeatherData({...props.weatherData})
  }, [props])

  return (

    <div className="col-md-12">
      <div className="Weather">
        <img className="weatherBg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7bvT2T22TsKPDK4shkTzvw9AmZNXyf74uw&usqp=CAU"></img>
        <div className="content-body">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4 searchBox">
            <input type="search" className="form-control" placeholder="Enter city name" onChange={(event) => handleSearchText(event.target.value)}/>
            <button className="btn btn-primary" type="botton" onClick={() => handleSearch()} >Search</button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">

         { weatherData && Object.keys(weatherData).length !== 0 &&  ( 
            <div className="shadow rounded weatherResultBox">
                <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" />
                <div>{`${weatherData?.weather[0]["description"]}`} </div>
                <h5 className="city">{weatherData.name}</h5>
                <h1 className="Temp">{weatherData?.main?.temp}°C</h1>
                <h3 className="tempmin_max">Min :{weatherData?.main?.temp_min}°C ! Max : 21.5°C</h3>
            </div>) 
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      weatherData: state.weather.weatherData,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      initWeatherData: (payload) => dispatch(initWeatherData(payload)) 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails)