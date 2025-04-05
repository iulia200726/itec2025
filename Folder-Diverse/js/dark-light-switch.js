document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.getElementById("modeSwitch");
  const body = document.body;

  // Aplica tema salvată din localStorage
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  if (darkModeEnabled) {
    body.classList.add("dark-mode");
    if (modeSwitch) modeSwitch.checked = true;
  }

  // Activează/dezactivează dark mode cu tranziție
  const toggleDarkMode = () => {
    body.classList.add("theme-transition");

    if (modeSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }

    // Eliminăm clasa de tranziție după animație
    setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 300);
  };

  // Ascultă schimbarea pe checkbox
  if (modeSwitch) {
    modeSwitch.addEventListener("change", toggleDarkMode);
  }
});

