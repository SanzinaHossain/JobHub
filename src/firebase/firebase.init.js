import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCVbuf9WCK5S_GtQTLxehJ8nFALaUyoTNM",
  authDomain: "jobhub-4fe30.firebaseapp.com",
  projectId: "jobhub-4fe30",
  storageBucket: "jobhub-4fe30.appspot.com",
  messagingSenderId: "9234538904",
  appId: "1:9234538904:web:192b3eb882bdcb37ce4bed",
  measurementId: "G-K9L9EC8QTQ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export default app
