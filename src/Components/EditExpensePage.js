import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends Component {
    onSubmit = (expense)=>{
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.startRemoveExpense({ id : this.props.expense.id})
        
        this.props.history.push('/')    
    }
    render() {
        return (
            <div>
        <ExpenseForm
        expense = {this.props.expense}
            onSubmit = {this.onSubmit}
        />
        <button onClick = {this.onClick}>Remove</button>
    </div>
        )
    }
}

// const EditExpensePage = (props) =>{
    
//     return (
//         <div>
//         <ExpenseForm
//         expense = {props.expense}
//             onSubmit = {(expense)=>{
//                 props.dispatch(editExpense(props.expense.id,expense))
//                 props.history.push('/')
//             }}
//         />
//         <button onClick = {() => {
//             props.dispatch(removeExpense({ id : props.expense.id})
//             )
//             props.history.push('/')    
//         }}
            
//             >Remove</button>
//     </div>
//     )
// }
const mapStateToProps = (state,props) => {
    return {
        expense : state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => 
    ({editExpense: (expense) => dispatch(editExpense(expense)),
        startRemoveExpense: (expense) => dispatch(startRemoveExpense({id : expense.id}))})


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)