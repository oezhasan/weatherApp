import weather from "./weather.js";
import dom from "./dom.js";

const btnSubmit = document.querySelector("#btn-submit");
const btnReturn = document.querySelector("#return-btn");
const loc =  document.querySelector("#location");
const form = document.querySelector(".form");
const output = document.querySelector(".output");

btnSubmit.addEventListener("click", async()=>{
    try {
    if (loc.value === "") throw new Error("Enter a city");
    
    const w = new weather();
    const d = new dom();

    const weatherData =  await w.getDatafromAPI(loc.value);
    
    d.updateWeather(weatherData);

    loc.value ="";
    output.classList.remove("inactive");
    form.classList.add("inactive");
    }
    catch(error){
        loc.value ="";

        alert(error)
    }
} );

btnReturn.addEventListener("click", ()=>{
    output.classList.add("inactive");
    form.classList.remove("inactive");
})






