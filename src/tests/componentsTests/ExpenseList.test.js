import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import { ExpenseList } from '../../Components/ExpenseList'
import expenses from '../fixtures/expensesFixture'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should Render ExpenseList with Expenses ', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses}/> )
    expect(wrapper).toMatchSnapshot
})


test('should Render ExpenseList without Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]}/>)
    expect(wrapper).toMatchSnapshot()
})