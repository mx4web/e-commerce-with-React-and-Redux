import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCZxKpMxur0LtDlsGvKI0nlmRpbXtfAhPk',
    authDomain: 'ecommerce-91347.firebaseapp.com',
    databaseURL: 'https://ecommerce-91347.firebaseio.com',
    projectId: 'ecommerce-91347',
    storageBucket: 'ecommerce-91347.appspot.com',
    messagingSenderId: '1059065241765',
    appId: '1:1059065241765:web:4c81298f9460bdd0d56d4c',
    measurementId: 'G-ZZVNPQ21L4',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
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
