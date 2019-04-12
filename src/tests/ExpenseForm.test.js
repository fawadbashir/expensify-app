import React from 'react'
import { shallow } from 'enzyme'
// import {createSerializer} from 'enzyme-to-json';
import expenses from './fixtures/expensesFixture'
import  ExpenseForm  from '../Components/ExpenseForm'
// expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}))

test('should Render Expense Form correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('should Render Expense Form with value', () => {
    const wrapper = shallow(<ExpenseForm expense= {expenses[2]}/>)
    expect(wrapper).toMatchSnapshot()
})