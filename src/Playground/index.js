import { createStore } from "redux";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRouter from '../src/routers/AppRouter'
// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy

})
const decrementCount = ({decrementBy = 1}) => ({
    type : 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type : 'SET',
    count
})
const resetCount = () => ({
    type : 'RESET',
    
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
           
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
        
            return {
                count: state.count - action.decrementBy
            }
            case 'SET':
            return {
                count : action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state

    }


})

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy : 5}))
store.dispatch(incrementCount())

store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy : 10}))

store.dispatch(setCount({count : 101}))





// ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
