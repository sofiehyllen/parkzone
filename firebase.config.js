// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwD9dT72byzlPm1GCM87JI0ZnGw7A2--0',
  authDomain: 'parkzone-f0f37.firebaseapp.com',
  databaseURL:
    'https://parkzone-f0f37-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'parkzone-f0f37',
  storageBucket: 'parkzone-f0f37.appspot.com',
  messagingSenderId: '194252371660',
  appId: '1:194252371660:web:4b1f111d1a4fb100397469',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const parkingDatabase = getFirestore(app);
