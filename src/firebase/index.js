import firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCmlsXLxY4KyE5tarZ05sTxfwOJxgALSsU",
    authDomain: "todo-muebles.firebaseapp.com",
    databaseURL: "https://todo-muebles.firebaseio.com",
    projectId: "todo-muebles",
    storageBucket: "todo-muebles.appspot.com",
    messagingSenderId: "79353251862",
    appId: "1:79353251862:web:d07faee0974383ba060d37",
    measurementId: "G-V5E31J89JM"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}