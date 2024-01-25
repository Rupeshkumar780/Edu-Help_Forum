import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDriFib5R2QlvsCYLS1GDzpErXFYTi-lfc",
    authDomain: "edu-help-forum-ad3f3.firebaseapp.com",
    projectId: "edu-help-forum-ad3f3",
    storageBucket: "edu-help-forum-ad3f3.appspot.com",
    messagingSenderId: "923212713707",
    appId: "1:923212713707:web:c8f773e0582037dd0038ae"
}

initializeApp(firebaseConfig)
const auth = getAuth()

//signing users up
const sign_button = document.querySelector(".sighup");
const signupForm = document.querySelector(".EduHelp1");
sign_button.addEventListener('click' ,(e) => {
    e.preventDefault();
    const Email = signupForm.email.value;
    const Password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, Email, Password)
        .then((credential) => {
            console.log('user created!',credential.user)
            alert("Registered Successfully!");
            window.location.href = '/index.html';
            signupForm.reset()
        })
        .catch((err) => {
            console.log(err.message)
            // Check if the email is already in use Or not
            if (err.code === "auth/email-already-in-use") {
                alert("Email is already in use. Please choose a different email or login.");
            } else {
                // Handle other registration errors if needed
                alert("Registration failed. Please try again.");
            }
        })
})
