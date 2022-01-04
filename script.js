import weather from "weather.js";

const btnSubmit = document.querySelector("#btn-submit");
const loc =  document.querySelector("#location");

btnSubmit.addEventListener("click", ()=>{
    if (loc.value === "") return;

    weather.getDatafromAPI(loc.value);
} );






