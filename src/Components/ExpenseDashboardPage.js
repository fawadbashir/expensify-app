import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <div className='pt-3 full-width-body' style={{ marginBottom: '0.5rem', padding: '0.5rem 0', }}>
            <ExpensesSummary />
            <Link to='/create'><Button size='lg' className=' mt-3' style={{ fontSize: '18px', backgroundColor: '#3D9970', color: 'white', border: 'none', padding: '10px' }} >Add Expense</Button></Link>
        </div>
        <ExpenseListFilters />
        <ExpenseList />



    </div >
)

export default ExpenseDashboardPage