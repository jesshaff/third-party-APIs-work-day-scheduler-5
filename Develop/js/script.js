// Display Todays Date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Add lister for save button
let button = document.getElementById("saveBtn");

function saveClick(event) {
    console.log("save button was clicked");
}

button.addEventListener("click", saveClick);
// Save text in local storage

// loop time blocks

// check time and add background color indicators

// getItem from local storage
