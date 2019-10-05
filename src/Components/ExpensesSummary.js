import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

const style = {
    fontWeight: 500
}

export const ExpensesSummary = (props) => {
    const Total = numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')
    const expenseCount = props.expenses.length
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 300 }} >Viewing <span style={style}>{props.expenses.length} </span>
                <span style={style}>{expenseWord}</span> of Total <span style={style}>{Total}</span></h1>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)