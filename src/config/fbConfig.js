import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCJHQaTEU4cP24qO1uC8gKakpydoEkniCs",
    authDomain: "evently-dea3c.firebaseapp.com",
    databaseURL: "https://evently-dea3c.firebaseio.com",
    projectId: "evently-dea3c",
    storageBucket: "",
    messagingSenderId: "49069227294",
    appId: "1:49069227294:web:439c0c86931c614f649d0f"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;