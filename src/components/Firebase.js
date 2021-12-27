import firebase from "firebase/app";
import "firebase/messaging";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyDivMbui64KLuOskHa5KzME8H0oaejxUJQ",
  authDomain: "first-cloud-messsaging.firebaseapp.com",
  projectId: "first-cloud-messsaging",
  storageBucket: "first-cloud-messsaging.appspot.com",
  messagingSenderId: "541915333434",
  appId: "1:541915333434:web:a8ab0ab090bb553373c603",
  measurementId: "G-8DE3YGNSSE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BBvftrh7tIDaM0LSXsXX-ylo6puVvYg6nHKC4V5Am8UhJEnsj2v0LAlE3akvzNdZEchxcByOiLjGIdcz81-YLTw",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
