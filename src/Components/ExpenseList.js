import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList =  (props) =>{
    return <div>
        <h1>ExpenseList</h1> 
            {/* <p>{props.expenses.length}</p> */}
            {props.expenses.map((expense)=> 
            <ExpenseListItem key = {expense.id} {...expense}/>)}
    </div>
}


const mapStatetoProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList)