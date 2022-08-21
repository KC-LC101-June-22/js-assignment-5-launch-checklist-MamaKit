// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const targetDiv = document.getElementById("missionTarget");

    targetDiv.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = "hidden";

    const launchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } else {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        }

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
        }

        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }
        faultyItems.style.visibility = "visible";
    } else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        faultyItems.style.visibility = "visible";
        if (validateInput(pilot) !== "Not a Number") {
            pilotStatus.innerHTML = "Invalid pilot entered";
        }
        if (validateInput(copilot) !== "Not a Number") {
            copilotStatus.innerHTML = "Invalid copilot entered"
        }
        if (validateInput(fuelLevel) !== "Is a Number") {
            fuelStatus.innerHTML = "Invlaid fuel amount entered"
        }
        if (validateInput(cargoLevel) !== "Is a Number") {
            cargoStatus.innerHTML = "Invalid cargo weight entered"
        }
    }
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
