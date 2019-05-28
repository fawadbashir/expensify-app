import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import AddExpensePage from '../Components/AddExpensePage'
import EditExpensePage from '../Components/EditExpensePage'
import HelpPage from '../Components/HelpPage'
import NotFoundPage from '../Components/NotFoundPage'
import {Header} from '../Components/Header'
import LoginPage from '../Components/LoginPage'

export const history = createBrowserHistory()
console.log(history)
const AppRouter = () => (
<BrowserRouter> 
    <div>
    <Header/>
    <Switch>
    <Route path = "/"  exact = {true} component ={LoginPage}/>
    <Route path = '/dashboard' component = {ExpenseDashboardPage} />
    <Route path = "/create" component ={AddExpensePage}/>
    <Route path = "/edit/:id" component ={EditExpensePage}/>
    <Route path = "/help" component ={HelpPage}/>
    <Route component = {NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter> 
)

export default AppRouter