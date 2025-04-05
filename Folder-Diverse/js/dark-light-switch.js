const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;


function toggleDarkMode() {
  if (modeSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");
  }
}


const darkModeEnabled = localStorage.getItem("darkMode") === "true";


if (darkModeEnabled) {
  body.classList.add("dark-mode");
  modeSwitch.checked = true;
}

modeSwitch.addEventListener("change", toggleDarkMode);
