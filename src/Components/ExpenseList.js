import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import Card from 'react-bootstrap/Card'

export const ExpenseList = (props) => {
    return <div>

        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                    <>

                        <Card>
                            <Card.Header><span>Expense</span>
                                <span className='float-right'>Amount</span></Card.Header>

                            {

                                props.expenses.map((expense) =>
                                    <ExpenseListItem key={expense.id} {...expense} />)}
                        </Card>

                    </>
                )
        }

    </div>
}


const mapStatetoProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList)