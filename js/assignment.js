"use strict";
const resolution = "Graduate From Code:You";
const currentYear = "2025"
let willMeetResolution = "Yes"

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.

function updateYear() {
    // Update this function
    yearElement.innerText = currentYear
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution
}

function updateWillMeetResolution() {
    // Update this function
    willMeetResolutionElement.innerText = willMeetResolution
}

function render() {
    // Update this function
    updateResolution();
    updateWillMeetResolution();
    updateYear();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
})
