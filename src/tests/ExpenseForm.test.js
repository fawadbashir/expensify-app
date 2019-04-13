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

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
})

test('should set description on input Change', () => {
    const value = 'new Description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target: { value}
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set note on textarea Change', () => {
    const value = 'new note value'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    })
    expect(wrapper.state('amount')).toBe(value)
    
})

test('should set amount if inValid Input', () => {
    const value = '122.900'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})