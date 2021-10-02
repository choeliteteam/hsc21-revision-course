import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyAC_0ALth7Sa49p4WVQ47HWlDXCZ6Xez7A",

    authDomain: "hsc-21-chemistry-revision.firebaseapp.com",

    projectId: "hsc-21-chemistry-revision",

    storageBucket: "hsc-21-chemistry-revision.appspot.com",

    messagingSenderId: "978986359125",

    appId: "1:978986359125:web:67b8742e458eef841537dc"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();


const contactForm = document.querySelector('.contact-form');
const fullName = document.querySelector('.name');
const emailAddress = document.querySelector('.email');
const telephoneNumber = document.querySelector('.tel');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit-form');
const modal = document.querySelector('.modal-wrap');
const close = document.querySelector('.modal-close');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addDoc(collection(db, 'contact-form'),{
        fullName: fullName.value,
        emailAddress: emailAddress.value,
        telephoneNumber: telephoneNumber.value,
        message: message.value,
    }).then(() => {
        contactForm.reset();
        modal.classList.toggle('display-none');
    });
});

close.addEventListener('click', () => {
    modal.classList.toggle('display-none');
});