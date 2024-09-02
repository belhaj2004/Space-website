// Fetch the JSON file

let moon, mars, europa, titan;
let crew_commander, crew_mission, crew_pilot, crew_engineer;
let launch, port, capsule;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
         moon = data.destinations[0];
         mars = data.destinations[1];
         europa = data.destinations[2];
         titan = data.destinations[3];

            // console.log("Moon Description:", moon.description);
            // console.log("europa Description:", europa.description);

            // console.log("Moon PNG Image:", moon.images.png);

            crew_commander=data.crew[0];
            crew_mission=data.crew[1];
            crew_pilot=data.crew[2];
            crew_engineer=data.crew[3];

            launch=data.technology[0];
            port = data.technology[1];
            capsule=data.technology[2];

            console.log(launch.name);
            
 
    })



function changeToMars() {
    document.getElementById("describe").textContent=mars.description;
    document.getElementById("heading").textContent=mars.name;
    document.getElementById("distance").textContent=mars.distance;
    document.getElementById("time").textContent=mars.travel;
    document.getElementById("picture").src = mars.images.png; 
}

function changeToMoon() {
    document.getElementById("describe").textContent=moon.description;
    document.getElementById("heading").textContent=moon.name;
    document.getElementById("distance").textContent=moon.distance;
    document.getElementById("time").textContent=moon.travel;
    document.getElementById("picture").src = moon.images.png; 
}

function changeToEuropa() {
    document.getElementById("describe").textContent=europa.description;
    document.getElementById("heading").textContent=europa.name;
    document.getElementById("distance").textContent=europa.distance;
    document.getElementById("time").textContent=europa.travel;
    document.getElementById("picture").src = europa.images.png; 
}

function changeToTitan() {
    document.getElementById("describe").textContent=titan.description;
    document.getElementById("heading").textContent=titan.name;
    document.getElementById("distance").textContent=titan.distance;
    document.getElementById("time").textContent=titan.travel;
    document.getElementById("picture").src = titan.images.png; 
}

function activateDot(dot) {
    const dots = document.querySelectorAll('.dots');
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
}

function changeToEngineer(dot) {
    document.getElementById("crew-name").textContent=crew_engineer.name;
    document.getElementById("crew-rank").textContent=crew_engineer.role;
    document.getElementById("bio").textContent=crew_engineer.bio;
    document.getElementById("crew-picture").src=crew_engineer.images.png;
    activateDot(dot);

}

function changeToCommander(dot) {
    document.getElementById("crew-name").textContent=crew_commander.name;
    document.getElementById("crew-rank").textContent=crew_commander.role;
    document.getElementById("bio").textContent=crew_commander.bio;
    document.getElementById("crew-picture").src=crew_commander.images.png;
    activateDot(dot);
}

function changeToMission(dot){
    document.getElementById("crew-name").textContent=crew_mission.name;
    document.getElementById("crew-rank").textContent=crew_mission.role;
    document.getElementById("bio").textContent=crew_mission.bio;
    document.getElementById("crew-picture").src=crew_mission.images.png;
    activateDot(dot);
}

function changeToPilot(dot){
    document.getElementById("crew-name").textContent=crew_pilot.name;
    document.getElementById("crew-rank").textContent=crew_pilot.role;
    document.getElementById("bio").textContent=crew_pilot.bio;
    document.getElementById("crew-picture").src=crew_pilot.images.png;
    activateDot(dot);
}

function updateButton(button) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(d => d.classList.remove('active'));
    button.classList.add('active');
}

function changeToLaunch(button) {
    document.getElementById("space-name").textContent=launch.name;
    document.getElementById("space-describe").textContent=launch.description;
    document.getElementById("space-picture").src=launch.images.portrait;
    updateButton(button);
}


function changeToPort(button) {
    document.getElementById("space-name").textContent=port.name;
    document.getElementById("space-describe").textContent=port.description;
    document.getElementById("space-picture").src=port.images.portrait;
    updateButton(button);
}

function changeToCapsule(button) {
    document.getElementById("space-name").textContent=capsule.name;
    document.getElementById("space-describe").textContent=capsule.description;
    document.getElementById("space-picture").src=capsule.images.portrait;
    updateButton(button);
}

function moveToDestination() {
    document.getElementById("describe").textContent=mars.description;
    document.getElementById("heading").textContent=mars.name;
    document.getElementById("distance").textContent=mars.distance;
    document.getElementById("time").textContent=mars.travel;
    document.getElementById("picture").src = mars.images.png; 
}

function changeColor() {
    const exploreDiv = document.querySelector('.doc-select');
    let borderOn = false;

    // Toggle the border on and off every 0.3 seconds
    const intervalId = setInterval(() => {
        if (borderOn) {
            exploreDiv.style.border = '1px solid white'; // Add the white border
        } else {
            exploreDiv.style.border = 'none'; // Remove the border
        }
        borderOn = !borderOn;
    }, 300);

    // Stop the border toggling after a certain time (e.g., 3 seconds)
    setTimeout(() => {
        clearInterval(intervalId); // Stop the interval
        exploreDiv.style.border = '1px solid white'; // Ensure the border stays on at the end
    }, 3000); // This runs for 3 seconds, adjust as needed
}


