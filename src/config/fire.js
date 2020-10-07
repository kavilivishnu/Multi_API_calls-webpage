import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDQ8Um6fHe036s-VdPPsIW6XjMCSW4ujjo",
    authDomain: "fir-login1-f7c41.firebaseapp.com",
    databaseURL: "https://fir-login1-f7c41.firebaseio.com",
    projectId: "fir-login1-f7c41",
    storageBucket: "fir-login1-f7c41.appspot.com",
    messagingSenderId: "201996087666",
    appId: "1:201996087666:web:18dc173ed9ab40e44c6deb"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;