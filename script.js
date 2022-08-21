// Write your JavaScript code here!

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    const button = document.getElementById("formSubmit");
    const list = document.getElementById("faultyItems");
    const list2 = document.getElementById("missionTarget");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    
    let response = {};

    list.style.visibility = "hidden";
    
    form.addEventListener("submit", function(event) {
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required.");
        } else {
            response = {
                pilot: pilotName.value,
                copilot: copilotName.value,
                fuelLevel: fuelLevel.value,
                cargoLevel: cargoMass.value
            };
            formSubmission(window.document,list,response.pilot,response.copilot,response.fuelLevel,response.cargoLevel);
        }
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let picked = pickPlanet(listedPlanets);
        console.log(picked);
        addDestinationInfo(window.document,picked.name, picked.diameter,picked.star,picked.distance,picked.moons,picked.image);
    })

});
