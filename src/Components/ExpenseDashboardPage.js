import React from 'react';
import { Link } from 'react-router-dom'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <Link to='/create'><button >Add Expense</button></Link>
        <ExpenseListFilters />
        <ExpenseList />


    </div>
)

export default ExpenseDashboardPage