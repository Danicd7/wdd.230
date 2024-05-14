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