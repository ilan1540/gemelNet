// start config firestore
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';

import rootReducer from './rootReducwe';

const firebaseConfig = {
  apiKey: "AIzaSyABlbprGvwRujn0YpzKt_dPUuooTTtaIMU",
  authDomain: "gemelnet-9fb34.firebaseapp.com",
  projectId: "gemelnet-9fb34",
  storageBucket: "gemelnet-9fb34.appspot.com",
  messagingSenderId: "89772091767",
  appId: "1:89772091767:web:cad595e2f04b5950361972",
  measurementId: "G-51VF3HFG8C"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
export const storage = firebase.storage()
// Add firebase to reducers

// צריך כדי לקלוט נתונים מ web api
const middleware = [thunk];

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
