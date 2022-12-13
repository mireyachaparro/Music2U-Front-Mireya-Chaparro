import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    projectId: 'final-project-ace6f',
    appId: '1:996610710049:web:cf53b8eed451dfe57b2160',
    storageBucket: 'final-project-ace6f.appspot.com',
    locationId: 'europe-west3',
    apiKey: 'AIzaSyC-5w2TRckzNT_Ihb3vvr1ATVDdSA804Ls',
    authDomain: 'final-project-ace6f.firebaseapp.com',
    messagingSenderId: '996610710049',
});
