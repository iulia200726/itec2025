import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Gestionare formular Sign Up
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    alert("Cont creat cu succes!");
    signupForm.reset();

    // Redirecționare către index.html
    window.location.href = "../index.html";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Eroare: Acest email este deja folosit.");
    } else {
      alert(`Eroare: ${error.message}`);
    }
    console.error("Error signing up:", error.message);
  }
});