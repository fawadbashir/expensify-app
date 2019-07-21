import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
            {/* <Typography variant="h3" color="blue">Some text in here</Typography> */}
               
                <Typography variant = 'h3'>Add Expense</Typography>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
                
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage)