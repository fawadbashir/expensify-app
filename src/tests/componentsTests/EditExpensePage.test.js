import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json'
import expenses from '../fixtures/expensesFixture'
import { EditExpensePage } from "../../Components/EditExpensePage"
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}))

let wrapper
let startRemoveExpense
let editExpense
let history

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push : jest.fn() }
    wrapper = shallow(<EditExpensePage history = {history}
        editExpense = {editExpense}
        startRemoveExpense = {startRemoveExpense}
        expense={expenses[1]} />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
})

test('should handle onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id : expenses[1].id})
})

