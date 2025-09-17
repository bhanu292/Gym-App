// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDJzXP3dPZ1GZqja0xmmrTiBV22PjUC8Tg",
  authDomain: "gym-project-b561a.firebaseapp.com",
  projectId: "gym-project-b561a",
  storageBucket: "gym-project-b561a.firebasestorage.app",
  messagingSenderId: "598194360704",
  appId: "1:598194360704:web:567e5db52ed0eb4af03165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs
const email = document.getElementById('email').ariaValueMax;
const password = document.getElementById('password').ariaValueMax;

//login button

const login = document.getElementById('login');
login.addEventListener("click",function (event){
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signed up
        const user = userCredential.user;
        alert("Creating Account...")
        window.location.href ="grand.html";
        //..
    })
    .catch((error) =>  {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        //..
    });
    
});