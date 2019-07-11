import React from 'react';
import { Link } from 'react-router-dom'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
const ExpenseDashboardPage = () => (
    <div>
    This is my Dashboard Page
    <ExpensesSummary/>
   <Link to = '/create'><button className="btn blue btn-large">Add Expense</button></Link>
    <ExpenseListFilters/>
    <ExpenseList/>
    
    </div>
)

export default ExpenseDashboardPage