
export class dom{
    loc =  document.querySelector("#location");
    output = document.querySelector("#output");

    updateWeather(data){
        if (!data) return;

        output.textContent = loc.value;
    }

}