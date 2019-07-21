import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export  const ExpensesSummary = (props) => {
    const Total = numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')
    const expenseCount = props.expenses.length
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'
    
    return(
        <div><h4>Viewing {props.expenses.length} {expenseWord} of Total {Total}</h4>
            
        </div>
    )
} 


const mapStateToProps = (state) =>{
   return {
       expenses : selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)