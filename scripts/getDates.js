// lastModified	
document.querySelector(
    "#lastModified"
).textContent = `Last Update: ${document.lastModified}`;

// currentYear
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;

const hamButton = document.querySelector('#menu');
const navButton = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    //hamButton.classList.toggle('open');
});

// darkmode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});