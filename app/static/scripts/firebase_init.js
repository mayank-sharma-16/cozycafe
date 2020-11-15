// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAGpIP9NODfDF2tOwQikRBCqgnBR0MpBCA",
    authDomain: "cozycafe-182cf.firebaseapp.com",
    databaseURL: "https://cozycafe-182cf.firebaseio.com",
    projectId: "cozycafe-182cf",
    storageBucket: "cozycafe-182cf.appspot.com",
    messagingSenderId: "869876494321",
    appId: "1:869876494321:web:617c299157f026939dde50",
    measurementId: "G-BK1S7X3DFZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export {database}