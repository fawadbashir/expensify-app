import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import expenses from '../fixtures/expensesFixture'
import { AddExpensePage } from "../../Components/AddExpensePage";
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}))

let startAddExpense
let history
let wrapper

beforeEach(() =>{
    startAddExpense = jest.fn()
    history = { push : jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense = {startAddExpense} history = {history}/>)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit' , () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2])
})