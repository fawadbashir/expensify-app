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
import './firebase/firebase'

const store = configureStore()



// store.dispatch(setTextFilter('water'))
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);
// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => 
ReactDOM.render(<Provider store = {store}> <AppRouter/> </Provider>, document.getElementById('root'))
)


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()