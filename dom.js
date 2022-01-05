export default class dom{
    loc =  document.querySelector("#location");
    output = document.querySelector("#output");

    feelsLike = document.querySelector("#feels-like-value")
    humidity = document.querySelector("#humidity-value")
    pressure = document.querySelector("#pressure-value")
    minTemp = document.querySelector("#min-temp-value")
    maxTemp = document.querySelector("#max-temp-value")

    updateWeather(data){
        if (!data) return;
        console.log(data)
        console.log(data.humidity)
        
        this.feelsLike.textContent = data.feels_like;
        this.humidity.textContent = data.humidity;
        this.pressure.textContent = data.pressure;
        this.minTemp.textContent = data.temp_min;
        this.maxTemp.textContent = data.temp_max;

    }

}

