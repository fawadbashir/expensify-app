import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import './App.scss'
import configureStore from './store/configurestore'
import {startSetExpenses} from './actions/expenses'
// import {setTextFilter} from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'
import * as serviceWorker from './serviceWorker'
import { firebase } from './firebase/firebase'
import { history } from './routers/AppRouter'
require('dotenv').config() 


const store = configureStore()



// store.dispatch(setTextFilter('water'))
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);
// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)
ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))
let isRendered = false
const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(<Provider store = {store}> <AppRouter/> </Provider>, document.getElementById('root'))
        isRendered = true
    }
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()

            if (history.location.pathname === '/') {
                history.push('/create')
            }
        })
        console.log('Login')

    } else {
        renderApp()
        history.push('/')
        console.log('logout')
    }
})    


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()