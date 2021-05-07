import * as firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYKHICIMDnhiK7h-CKr9XYGyog-f8iXws",
    authDomain: "chat-app-867bf.firebaseapp.com",
    projectId: "chat-app-867bf",
    storageBucket: "chat-app-867bf.appspot.com",
    messagingSenderId: "605512384034",
    appId: "1:605512384034:web:cf0b11fd3422b93d5a947b"
}

firebase.initializeApp(firebaseConfig)

export default firebase