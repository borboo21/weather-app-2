import React from 'react';
import {SearchBar} from "../search-bar/search-bar";
import {ForecastWeather} from "../forecast-weather/forecast-weather";

export function App() {
    return(
        <>
            <SearchBar/>
            <ForecastWeather/>
        </>
    )
}
export default App;
