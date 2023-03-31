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

// Function to set a cookie
function setCookie(name, value, seconds) {
  let expires = "";
  if (seconds) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toUTCString();
  } else {
    expires = "";
  }
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// set the cookie with a 15-20 second expiration time
setCookie("myCookie", "myValue", 15);

function clearConsole() {
  console.clear();
}

setTimeout(function () {
  clearConsole();
}, 15000);

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

document.querySelector("#settings").addEventListener("click", function () {
  // Close the first modal
  modal.close();
  // Show the second modal
  secondModal.showModal();
});

// Add event listeners to the buttons
document.querySelector("#accept-all").addEventListener("click", function () {
  // Set cookies for all options
  setCookie("browser", true);
  setCookie("os", true);
  setCookie("sWidth", true);
  setCookie("sHeight", true);

  // Display OS and browser name
  if (document.querySelector('input[name="browser"]').checked) {
    console.log("Browser name:", getBrowserName());
  }
  if (document.querySelector('input[name="os"]').checked) {
    console.log("OS name:", getOSName());
  }
  if (document.querySelector('input[name="sWidth"]').checked) {
    console.log("Screen width:", getScreenWidth());
  }
  if (document.querySelector('input[name="sHeight"]').checked) {
    console.log("Screen height:", getScreenHeight());
  }

  // Close the modal
  modal.close();
});

document.querySelector(".save").addEventListener("click", function () {
  // Get the user's preferences
  const browser = document.querySelector('input[name="browser"]').checked;
  const os = document.querySelector('input[name="os"]').checked;
  const sWidth = document.querySelector('input[name="sWidth"]').checked;
  const sHeight = document.querySelector('input[name="sHeight"]').checked;

  // Set cookies based on the user's preferences
  if (browser) {
    setCookie("browser", true);
  } else {
    deleteCookie("browser");
  }
  if (os) {
    setCookie("os", true);
  } else {
    deleteCookie("os");
  }
  if (sWidth) {
    setCookie("sWidth", true);
  } else {
    deleteCookie("sWidth");
  }
  if (sHeight) {
    setCookie("sHeight", true);
  } else {
    deleteCookie("sHeight");
  }

  // Display OS and browser name
  if (browser) {
    console.log("Browser name:", getBrowserName());
  }
  if (os) {
    console.log("OS name:", getOSName());
  }
  if (sWidth) {
    console.log("Screen width:", getScreenWidth());
  }
  if (sHeight) {
    console.log("Screen height:", getScreenHeight());
  }

  // Close the second modal
  secondModal.close();
});

// Function to get the browser name
function getBrowserName() {
  const userAgent = navigator.userAgent;
  let browserName;
  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
  } else {
    browserName = "Unknown";
  }
  return browserName;
}

// Function to get the OS name
function getOSName() {
  const userAgent = navigator.userAgent;
  let osName;
  if (userAgent.indexOf("Windows NT 10.0") > -1) {
    osName = "Windows 10";
  } else if (userAgent.indexOf("Windows NT 6.2") > -1) {
    osName = "Windows 8";
  } else if (userAgent.indexOf("Windows NT 6.1") > -1) {
    osName = "Windows 7";
  } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
    osName = "Windows Vista";
  } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
    osName = "Windows XP";
  } else if (userAgent.indexOf("Windows NT 5.0") > -1) {
    osName = "Windows 2000";
  } else if (userAgent.indexOf("Mac") > -1) {
    osName = "Macintosh";
  } else if (userAgent.indexOf("X11") > -1) {
    osName = "UNIX";
  } else if (userAgent.indexOf("Linux") > -1) {
    osName = "Linux";
  } else {
    osName = "Unknown";
  }
  return osName;
}

// Function to get the screen width
function getScreenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

// Function to get the screen height
function getScreenHeight() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
}
