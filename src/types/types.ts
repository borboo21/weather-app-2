export interface iWeatherRest {
current:{
    condition:{
        text: TCondition;
    }
    humidity: THumidity;
    temp_c: TTemp;
    wind_mph: TWind;
}
forecast:{
    forecastday:{
        [key:number]:IWeatherForecastDay
    }
}
}

export interface IWeatherForecastDay {
        date: TDate;
        day:{
            daily_chance_of_rain: TRain;
            maxtemp_c: TTemp;
            mintemp_c: TTemp;
        }
}

export interface IForecasts {
    [key: string]: IForecastDay[];
}
export interface IForecastDay {
    humidity: THumidity;
    temp: TTemp;
    wind: TWind;
    rain: TRain;
    maxTemp: TTemp;
    minTemp: TTemp;
    date: TDate;
    condition: TCondition;
}

export type TTemp = number;
export type TWind = number;
export type THumidity = number;
export type TRain = number;
export type TDate = number;
export type TCondition = string;
