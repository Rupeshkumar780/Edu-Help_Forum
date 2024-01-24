import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import{ collection, onSnapshot, getFirestore, addDoc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDriFib5R2QlvsCYLS1GDzpErXFYTi-lfc",
    authDomain: "edu-help-forum-ad3f3.firebaseapp.com",
    projectId: "edu-help-forum-ad3f3",
    storageBucket: "edu-help-forum-ad3f3.appspot.com",
    messagingSenderId: "923212713707",
    appId: "1:923212713707:web:c8f773e0582037dd0038ae"
}

initializeApp(firebaseConfig)
const db = getFirestore();
const colRef = collection(db,"Doubt");
const q = query(colRef, orderBy('createdAt'));

// adding documents
const buttn = document.querySelector('.addn');
const addDoubt = document.querySelector('.doubts-container');

addDoubt.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        Doubt: addDoubt.doubt.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        alert("Doubt Uploaded successfully!");
        addDoubt.reset()
    })
})

//real time collection data
onSnapshot(q, (snapshot) => {
    let Doubt = []
    snapshot.docs.forEach((doc) => {
        Doubt.push({ ...doc.data(), id: doc.id })
    })
    console.log(Doubt)
})

