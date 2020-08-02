import firebase, { database } from "firebase";
import "firebase/firebase-database";

var firebaseConfig = {
    apiKey: "AIzaSyCpbEflLYzJes0FNsm4migDtFkk1ZUVOA8",
    authDomain: "ferofen-d51e7.firebaseapp.com",
    databaseURL: "https://ferofen-d51e7.firebaseio.com",
    projectId: "ferofen-d51e7",
    storageBucket: "ferofen-d51e7.appspot.com",
    messagingSenderId: "654819739082",
    appId: "1:654819739082:web:4abd1f2aa5e8f2bccd7b33"
};

class Fire {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.dbDrivers = firebase.database().ref("Drivers");
    }
  }

export default new Fire()