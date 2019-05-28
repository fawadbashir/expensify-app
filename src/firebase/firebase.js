import * as firebase from 'firebase/app'
import "firebase/database"
import 'firebase/auth'


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDING_ID
  };
  firebase.initializeApp(config);

 const database = firebase.database()
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider()  
  export { firebase,googleAuthProvider, database as default }

  // firebase.database().ref('expenses').push({
  //   description: 'Coffee',
  //   note:'expensive',
  //   amount: 100,
  //   createdAt: 1000,
  // })

  

  // firebase.database().ref('expenses').once('value')
  // .then((snapshot) => {
  //   const expenses = []
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })

  //   })
  //   console.log(expenses)
  // })

  // firebase.database().ref('expenses').on('value',((snapshot) => {
  //   const expenses =[]
  //    snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // } ))

  // firebase.database().ref('expenses').on('child_removed',((snapshot) => {
  //   console.log(snapshot.key,snapshot.val())
  // }))

  // firebase.database().ref('expenses').on('child_changed', ((snapshot) => {
  //   console.log('child changed',snapshot.key,snapshot.val())
  // }))

//   firebase.database().ref().set({
//       name: 'Andrew Mead', 
//       age: 26,
//       stressLevel: 6,
//       job: {
//         title: 'Software developer',
//         company: 'Google'
//       },
//       location: {
//           city: 'Philadelphia',
//           country: 'United States'
//       },
      
//   })

//   firebase.database().ref('age').set(27)

//   firebase.database().ref('attributes').set({
//       height: 73,
//       weight: 150
//   }).then(() => {
//     console.log('Data Updated')
// }).catch((e) => {
//     console.log('Data Not Updated', e)
// })
  

// firebase.database().ref('isSingle').remove().then(() => {
//     console.log('Data Removed')
// }).catch((e) => {
//     console.log('Data Failed to Remove')
// })

// firebase.database().ref().on('value',((snapshot) => console.log(snapshot.val().name) ) )
// firebase.database().ref().on('value', ((snapshot) =>{
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// } ))

// firebase.database().ref().update({
//     // stressLevel: 9,
//     'job/company' : 'Microsoft',
//     'location/city': 'Seattle'
// })