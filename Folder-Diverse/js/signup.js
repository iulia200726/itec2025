import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-3HhK--nt0qlUmQ7GblJ8-bx85VmzS6Q",
  authDomain: "itec2025-87e45.firebaseapp.com",
  projectId: "itec2025-87e45",
  storageBucket: "itec2025-87e45.firebasestorage.app",
  messagingSenderId: "926099095073",
  appId: "1:926099095073:web:31c54d4256a18667d4ed60",
  measurementId: "G-0ED679DN4L"
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Selectează formularul de signup
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Preia datele din formular
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Creează utilizatorul
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Utilizator creat cu succes
      const user = userCredential.user;
      alert("Cont creat cu succes!");
      console.log("Utilizator:", user);

      // Resetează câmpurile de input
      firstName.value = "";
      lastName.value = "";
      username.value = "";
      email.value = "";
      password.value = "";
    })
    .catch((error) => {
      // Gestionare erori
      const errorCode = error.code;
      const errorMessage = error.message;

      // Afișează un mesaj specific pentru email deja folosit
      if (errorCode === "auth/email-already-in-use") {
        alert("Eroare: Acest email este deja folosit. Te rugăm să folosești un alt email.");
      } else {
        alert(`Eroare: ${errorMessage}`);
      }

      console.error("Eroare:", errorCode, errorMessage);
    });
});