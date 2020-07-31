import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCMWwTJTETsAWH-JkmgpgLGQ5vezUgfZ-8',
  authDomain: 'facemash-d8ef4.firebaseapp.com',
  databaseURL: 'https://facemash-d8ef4.firebaseio.com',
  projectId: 'facemash-d8ef4',
  storageBucket: 'facemash-d8ef4.appspot.com',
  messagingSenderId: '45665864427',
  appId: '1:45665864427:web:88ef219325d063b1330cae',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
