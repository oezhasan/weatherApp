import weather from "./weather.js";

const btnSubmit = document.querySelector("#btn-submit");
const loc =  document.querySelector("#location");
const form = document.querySelector(".form");

btnSubmit.addEventListener("click", ()=>{
    if (loc.value === "") return;
    
    const w = new weather();
    w.getDatafromAPI(loc.value);

    form.classList.add("inactive");
} );






