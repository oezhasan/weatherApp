export default class dom{
    loc =  document.querySelector("#location");
    output = document.querySelector("#output");

    feelsLike = document.querySelector("#feels-like-value")
    humidity = document.querySelector("#humidity-value")
    pressure = document.querySelector("#pressure-value")
    minTemp = document.querySelector("#min-temp-value")
    maxTemp = document.querySelector("#max-temp-value")
    temp = document.querySelector("#temp");
    city = document.querySelector("#city");
    weather = document.querySelector("#weather");
    weatherDesc = document.querySelector("#weatherDesc")

    updateWeather(data){
        if (!data) return;
        console.log(data)
        
        this.feelsLike.textContent = data.feels_like;
        this.humidity.textContent = data.humidity;
        this.pressure.textContent = data.pressure;
        this.minTemp.textContent = data.temp_min;
        this.maxTemp.textContent = data.temp_max;
        this.temp.textContent = data.temp+ " C°";
        this.city.textContent = data.location +", "+data.country;
        this.weather.textContent = data.weather;
        this.weatherDesc.textContent = data.weatherDesc;



    }

}

