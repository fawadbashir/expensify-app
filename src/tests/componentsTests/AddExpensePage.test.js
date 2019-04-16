import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import expenses from '../fixtures/expensesFixture'
import { AddExpensePage } from "../../Components/AddExpensePage";
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}))

let addExpense
let history
let wrapper

beforeEach(() =>{
    addExpense = jest.fn()
    history = { push : jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense = {addExpense} history = {history}/>)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit' , () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(addExpense).toHaveBeenLastCalledWith(expenses[2])
})