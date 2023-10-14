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
        return this.getResource(`q=${city}&days=${days}`);
    }
}


