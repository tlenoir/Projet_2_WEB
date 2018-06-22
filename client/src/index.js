import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/fonts/ionicons.min.css';
import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDRBXEuLHVEzhhLtO0SIj2Ol7VeblZ7byY",
    authDomain: "fishingw-45678.firebaseapp.com",
    databaseURL: "https://fishingw-45678.firebaseio.com",
    projectId: "fishingw-45678",
    storageBucket: "fishingw-45678.appspot.com",
    messagingSenderId: "503934933030"
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();