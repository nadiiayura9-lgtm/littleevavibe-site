import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import {

getFirestore,

collection,

addDoc,

getDocs

} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_KEY",

authDomain: "YOUR_DOMAIN",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_BUCKET",

appId: "YOUR_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const productsRef = collection(db,"products");

export { addDoc, getDocs };
