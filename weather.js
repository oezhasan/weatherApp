import dom from "./dom.js";

export default class weather{
    dom = new dom();

    async getDatafromAPI(location){
        try{
            const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fbb4436c6960d685ae67908dd7ded61d&units=metric`
            const response = await fetch(endpoint, {mode: 'cors'})
            //.then(response => response.json())
            //.then(data => console.log(data));
            const data = await response.json();
            const convertedData = this.convertData(data);
            return convertedData;
        }
        catch (error){
            console.log(error)
        }
    }

    convertData(d){
        const convertedData = {
            'location': d.name,
            'temp': d.main.temp,
            'pressure': d.main.pressure,
            'humidity': d.main.humidity,
            'feels_like': d.main.feels_like,
            'temp_min': d.main.temp_min,
            'temp_max': d.main.temp_max,
        }
        return convertedData;
    }    
}

