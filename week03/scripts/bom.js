//Year actualization 
const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;


document.querySelector(
    "#lastModified"
).textContent = `Last Update: ${document.lastModified}`;


//the bom script 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value != '') {
        const listItem = document.createElement('li');
        const removeButton = document.createElement('button');

        const item = input.value;
        listItem.textContent = item;
        removeButton.textContent = '❌';

        listItem.appendChild(removeButton);
        list.appendChild(listItem);

        removeButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        })
        input.value = '';
        input.focus();
    }
});

const chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => displayList(chapter));


// Function to set the localStorage item
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to get the localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Slice off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // Filter out the chapter
    setChapterList(); // Update the localStorage item
    document.querySelector('#list').innerHTML = ''; // Clear the current list
    chaptersArray.forEach(chapter => displayList(chapter)); // Re-populate the list
}