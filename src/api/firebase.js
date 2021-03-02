import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDd3522Gvx8aif-rqF8FT9E_KxbMm-dREY",
  authDomain: "byi-f87b1.firebaseapp.com",
  databaseURL: "https://byi-f87b1.firebaseio.com",
  projectId: "byi-f87b1",
  storageBucket: "byi-f87b1.appspot.com",
  messagingSenderId: "307805641949",
  appId: "1:307805641949:web:17f80d6ae5af7dd2944f34"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db, auth
};
