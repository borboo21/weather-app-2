import React from 'react';
import {WeatherService} from "./data/api";

function App() {
    let ws = new WeatherService();
    console.log(ws.getForecastWeather("Arkhangelsk",2))
    return(
        <div className="container">
        </div>
    )
}
export default App;
