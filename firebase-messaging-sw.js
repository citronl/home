importScripts("https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDA_PLy1m9R1zEW3UKABnSRZMAcPyMhDTE",
  authDomain: "home-2c69b.firebaseapp.com",
  projectId: "home-2c69b",
  storageBucket: "home-2c69b.firebasestorage.app",
  messagingSenderId: "593495254176",
  appId: "1:593495254176:web:3f3373aa15ce5cd945d5c5"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: "/home/icon.png",
    badge: "/home/icon.png"
  });
});
