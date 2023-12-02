export interface IWeatherRest {
    [key:number]:IWeatherForecastDay
}

export interface IWeatherForecastDay {
        date: TDate;
        day:{
            avghumidity: THumidity;
            avgtemp_c :TTemp;
            condition:{
                text: TCondition
            };
            daily_chance_of_rain: TRain;
            maxtemp_c: TTemp;
            mintemp_c: TTemp;
            maxwind_mph: TWind;
        }
}

export interface IForecasts {
    [key: string]: IForecastDay[];
}
export interface IForecastDay {
    humidity: THumidity;
    wind: TWind;
    rain: TRain;
    maxTemp: TTemp;
    minTemp: TTemp;
    avgTemp: TTemp;
    date: TDate;
    condition: TCondition;
}

export type TTemp = number;
export type TWind = number;
export type THumidity = number;
export type TRain = number;
export type TDate = number;
export type TCondition = string;
