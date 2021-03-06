import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import  './dates.css'
import { Form,Jumbotron, Button } from 'react-bootstrap'

class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: this.props.expense ? props.expense.description : '',
            note: this.props.expense ? props.expense.note : '',
            amount: this.props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: this.props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        }
        else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <>
            <Jumbotron>
            <h1>Add Expense</h1>
            </Jumbotron>
            <Form onSubmit={this.onSubmit}>


                {this.state.error && <p>{this.state.error}</p>}
                <Form.Group>

                    <Form.Control
                        as='input'
                        type="text"
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}

                    />
                </Form.Group>
                <Form.Group>

                    <Form.Control as='input'
                        type="number" placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                </Form.Group>

                    <Form.Group>
                    {/* <div className = 'container' > */}
                    <SingleDatePicker
                    
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        
                   />
                    
                   {/* </div> */}
                <Form.Group>
                    <Form.Control as='textarea' placeholder='Add a note for your expense(optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange} />
                        <style>
                        {`
                        
                        .btn-flat {
                            background-color : purple;
                            color:white
                        }
                            
                        `}
                        </style>
                    <Button variant = 'primary' type = 'submit' bsPrefix = 'btn btn-lg btn-flat mt-3'>Save Expense</Button>
                </Form.Group>
                  </Form.Group> 
            </Form>
                        
            </>

        )
    }
}

export default ExpenseForm