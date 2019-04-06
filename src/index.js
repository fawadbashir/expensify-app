import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import './App.scss'
import configureStore from './store/configurestore'
import {addExpense} from './actions/expenses'
// import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import * as serviceWorker from './serviceWorker'

const store = configureStore()



store.dispatch(addExpense({description : 'water bill', amount : 4500000}))
store.dispatch(addExpense({description : 'gas bill', createdAt : 1000}))
store.dispatch(addExpense({description : 'Rent', amount : 109500}))

// store.dispatch(addExpense({description : 'bill'}))

// store.dispatch(setTextFilter('water'))
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)






ReactDOM.render(<Provider store = {store}> <AppRouter/> </Provider>, document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()