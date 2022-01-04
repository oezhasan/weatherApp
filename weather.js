import dom from "dom.js";

export class weather{
    async getDatafromAPI(location){
        try{
            api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fbb4436c6960d685ae67908dd7ded61d&units=metric`
            const response = await fetch(api, {mode: 'cors'});
            const data = response.json();
            convertData(response);
        }
        catch (error){
            console.log(error)
        }
    }

    convertData(data){
        dateTemp = data.main.temp
        console.log(dateTemp)
        dom.updateWeather(dateTemp)
    }
}