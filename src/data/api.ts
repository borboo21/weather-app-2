import {IWeatherForecastDay, iWeatherRest, TCondition, TDate, THumidity, TRain, TTemp, TWind} from "../types/types";

const API_KEY: string = '50472d0a2fmshc9020618fcdc05bp17f3a6jsnbdc0cde2c0e4';
const URL_BASE: string = `https://weatherapi-com.p.rapidapi.com/forecast.json?`;
const API_HOST: string = `weatherapi-com.p.rapidapi.com`

export class WeatherService {
    async getResource(URL:string) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        };
        const res = await fetch(`${URL_BASE}${URL}`,options);

        if(!res.ok) {
            throw new Error(`Could not fetch ${URL}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    getForecastWeather(city: string, days: number){
        return this.getResource(`q=${city}&days=${days}`).then((data) =>{
            return this._transformForecast(data,city)
        }).catch(() =>{
            return null
        });
    }

    _transformForecast(data: iWeatherRest,city:string) {
        return {
        [city]:Object.values(data.forecast.forecastday).map(item =>{
            return this._transformForecastDay(item)
        })

        }
    }
    _transformForecastDay(item:IWeatherForecastDay){
        return{
            humidity: 0,
            temp: 0,
            wind: 0,
            rain: 0,
            maxTemp: 0,
            minTemp: 0,
            date: 0,
            condition: 0,
        }
    }
}

export const ws = new WeatherService()



