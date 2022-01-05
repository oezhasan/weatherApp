export default class dom{
    loc =  document.querySelector("#location");
    output = document.querySelector("#output");

    updateWeather(data){
        if (!data) return;

        this.output.textContent = this.loc.value + data;
    }

}

