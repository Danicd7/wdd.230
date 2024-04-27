// lastModified	
document.querySelector(
    "#lastModified"
).textContent = `Last Update: ${document.lastModified}`;

// currentYear
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;