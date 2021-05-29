import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDYejLVeWDI8ewSzZyvb0VoK24rv_IWwg",
  authDomain: "hackon-60415.firebaseapp.com",
  projectId: "hackon-60415",
  storageBucket: "hackon-60415.appspot.com",
  messagingSenderId: "292044820344",
  appId: "1:292044820344:web:0c206380e730da03c1028d"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileRequest = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

