"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQZ1Jw-71Eutw0MP7ZI5Ad_q-x4-ull4w",
    authDomain: "fillthecoin.firebaseapp.com",
    projectId: "fillthecoin",
    storageBucket: "fillthecoin.appspot.com",
    messagingSenderId: "25696958939",
    appId: "1:25696958939:web:593ffa05c53753d21a0ffe",
    measurementId: "G-09570HMES4"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
//# sourceMappingURL=firebase.js.map