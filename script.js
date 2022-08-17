// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    const button = document.getElementById("formSubmit");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    const faultyItems = document.getElementById("faultyItems");
    let response = {};

    faultyItems.style.visibility = "hidden";
    
    form.addEventListener("submit", function(event) {
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required.");
            event.preventDefault();
        } else {
            response = {
                pilot: pilotName.value,
                copilot: copilotName.value,
                fuelLevel: fuelLevel.value,
                cargoLevel: cargoMass.value
            };
            formSubmission(window.document,faultyItems,response.pilot,response.copilot,response.fuelLevel,response.cargoLevel);
            event.preventDefault();
        }
        // event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    })

});