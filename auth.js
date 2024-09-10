// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf6143NYtMLX-foYzc_J8s16s4_mkj41U",
    authDomain: "nobelcollege-159fb.firebaseapp.com",
    projectId: "nobelcollege-159fb",
    storageBucket: "nobelcollege-159fb.appspot.com",
    messagingSenderId: "350752294459",
    appId: "1:350752294459:web:6101ec09bd59f19f3c3e1e",
    measurementId: "G-49YH88KFL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
window.signup = function() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Signup successful!');
            window.location.href = 'index.php'; // Redirect to login.php after successful signup
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

window.login = function() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    console.log(`Attempting to sign in with email: ${email} \n Attempting to  signin with password: ${password}`);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login successful:', userCredential);
            alert('Login successful!');
            window.location.href = 'home.php';  // Redirect to home.php after successful login
        })
        .catch((error) => {
            console.error('Login error details:', error);
            alert(`Error: ${error.code} - ${error.message}`);
        });
};


// Logout function
window.logout = function() {
    signOut(auth)
        .then(() => {
            alert('Logout successful!');
            window.location.href = 'index.php'; // Redirect to login.php after successful logout
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

// Redirect to home.php if the user is already logged in
onAuthStateChanged(auth, (user) => {
    if (user && (window.location.pathname === '/login.php' || window.location.pathname === '/signup.php')) {
        window.location.href = 'home.php';
    }
});
