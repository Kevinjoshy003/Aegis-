// Login System
const agents = {
    "Zero": "ONY",
    "Cipher": "GXR",
    "Nyx": "LYF",
    "Sentinel": "TNQ",
    "Hex": "HWS"
};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (agents[username] && agents[username] === password) {
        window.location.href = "home.html";
    } else {
        errorMessage.innerText = "Access Denied. Incorrect credentials.";
    }
}

// Launch Animation
function launchMission() {
    let loading = document.getElementById("loading-animation");
    let button = document.getElementById("launch-btn");

    button.style.display = "none";
    loading.innerHTML = "Initializing...";
    loading.style.display = "block";

    setTimeout(() => { loading.innerHTML = "Decrypting Security Protocols..."; }, 1500);
    setTimeout(() => { loading.innerHTML = "Bypassing Firewalls..."; }, 3000);
    setTimeout(() => { window.location.href = "locate.html"; }, 4500);
}

// Locate Mainframe
function locateMainframe() {
    let imageDiv = document.getElementById("mainframe-image");
    let image = document.getElementById("mainframe-img");
    image.src = "your-mainframe-image.jpg"; // Replace with actual image path
    let message = document.getElementById("mainframe-message");
    let inputField = document.getElementById("mainframe-input");
    let inputValue = inputField.value.trim();
    if (inputValue === "B112") {
        image.src = "your-mainframe-image.jpg"; // Replace with actual image path
        imageDiv.style.display = "block";
        message.innerText = "Mainframe Located"; // Display message
        message.style.display = "block";
    } else {
        imageDiv.style.display = "none";
        message.innerText = "ERROR : Unable to locate"; // Display message
        message.style.display = "block";
        inputField.value = ""; // Clear the field
    }
}
