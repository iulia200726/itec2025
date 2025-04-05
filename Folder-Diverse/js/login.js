import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Gestionare formular Log In
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    alert("Autentificare reușită!");
    loginForm.reset();

    // Redirecționare către index.html
    window.location.href = "../index.html";
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      alert("Eroare: Parolă incorectă.");
    } else if (error.code === "auth/user-not-found") {
      alert("Eroare: Utilizatorul nu există.");
    } else {
      alert(`Eroare: ${error.message}`);
    }
    console.error("Error logging in:", error.message);
  }
});