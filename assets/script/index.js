"use strict";

// Get the dialog elements
const modal = document.querySelector("#modal");
const secondModal = document.querySelector("#second-modal");

// Check if cookies are enabled
if (!navigator.cookieEnabled) {
  console.log("Cookies are not enabled.");
}

// Check if there are any cookies stored
if (!document.cookie) {
  // Show the first modal after a delay of 1 second
  setTimeout(function () {
    modal.showModal();
  }, 1000);
}

// Add event listeners to the buttons
document.querySelector(".accept-all").addEventListener("click", function () {
  // Set cookies for all options
  setCookie("analytics", true);
  setCookie("personalization", true);
  // Close the modal
  modal.close();
});

document.querySelector(".settings").addEventListener("click", function () {
  // Close the first modal
  modal.close();
  // Show the second modal
  secondModal.showModal();
});

document.querySelector(".save").addEventListener("click", function () {
  // Get the user's preferences
  const analytics = document.querySelector('input[name="analytics"]').checked;
  const personalization = document.querySelector(
    'input[name="personalization"]'
  ).checked;
  // Set cookies based on the user's preferences
  if (analytics) {
    setCookie("analytics", true);
  } else {
    deleteCookie("analytics");
  }
  if (personalization) {
    setCookie("personalization", true);
  } else {
    deleteCookie("personalization");
  }
  // Close the second modal
  secondModal.close();
});
