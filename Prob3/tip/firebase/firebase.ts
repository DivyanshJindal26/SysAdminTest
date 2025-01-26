import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAuMJD0yKrtBVmd1fddPmI0NkDvuQeDq-k",
	authDomain: "test-project-e804f.firebaseapp.com",
	projectId: "test-project-e804f",
	storageBucket: "test-project-e804f.appspot.com",
	messagingSenderId: "978336391253",
	appId: "1:978336391253:web:6b036311742326ec63b4dc",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});

const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
