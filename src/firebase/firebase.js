import * as firebase from 'firebase/app'
import "firebase/database"


const config = {
    apiKey: "AIzaSyBqSNojEMLQmm0eARcZC2F6GqVBGFmUiLc",
    authDomain: "expensify-app-17378.firebaseapp.com",
    databaseURL: "https://expensify-app-17378.firebaseio.com",
    projectId: "expensify-app-17378",
    storageBucket: "expensify-app-17378.appspot.com",
    messagingSenderId: "327426164862"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
      name: 'Andrew Mead', 
      age: 26,
      isSingle: false,
      location: {
          city: 'Philadelphia',
          country: 'United States'
      },
      
  })

  firebase.database().ref('age').set(27)

  firebase.database().ref('attributes').set({
      height: 73,
      weight: 150
  })
  