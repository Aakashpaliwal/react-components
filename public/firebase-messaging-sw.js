// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDivMbui64KLuOskHa5KzME8H0oaejxUJQ",
  authDomain: "first-cloud-messsaging.firebaseapp.com",
  projectId: "first-cloud-messsaging",
  storageBucket: "first-cloud-messsaging.appspot.com",
  messagingSenderId: "541915333434",
  appId: "1:541915333434:web:a8ab0ab090bb553373c603",
  measurementId: "G-8DE3YGNSSE",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
