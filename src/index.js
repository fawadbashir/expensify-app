import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import './App.scss'
import configureStore from './store/configurestore'
import {startSetExpenses} from './actions/expenses'
import * as serviceWorker from './serviceWorker'
import { firebase } from './firebase/firebase'
import { history } from './routers/AppRouter'
import {login, logout} from './actions/auth'
require('dotenv').config() 



const store = configureStore()

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))
let isRendered = false
const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(<div className = 'container'><Provider store = {store}> <AppRouter/> </Provider></div>, document.getElementById('root'))
        isRendered = true
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        
        store.dispatch(login(user.uid))            
        store.dispatch(startSetExpenses()).then(() => {
            console.log(user.uid)
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
                
            }
        })
        console.log('Login')

    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log('logout')
    }
})    


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()