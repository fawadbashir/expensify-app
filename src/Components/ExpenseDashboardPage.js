import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = () => (
    <div>
    This is my Dashboard Page
    <ExpenseListFilters/>
    <ExpenseList/>
    
    </div>
)

export default ExpenseDashboardPage