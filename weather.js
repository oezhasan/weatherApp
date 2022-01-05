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
            console.log(data);
            this.convertData(data);
        }
        catch (error){
            console.log(error)
        }
    }

    convertData(d){
        console.log("A")
        console.log(d)
        let dateTemp = d.main.temp
        console.log(dateTemp)
        this.dom.updateWeather(dateTemp)
    }    
}

