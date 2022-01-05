import weather from "./weather.js";
import dom from "./dom.js";

const btnSubmit = document.querySelector("#btn-submit");
const loc =  document.querySelector("#location");
const form = document.querySelector(".form");
const output = document.querySelector(".output");

btnSubmit.addEventListener("click", async()=>{
    if (loc.value === "") return;
    
    const w = new weather();
    const d = new dom();

    const weatherData =  await w.getDatafromAPI(loc.value);
    
    d.updateWeather(weatherData);

    output.classList.remove("inactive");
    form.classList.add("inactive");

} );






