import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary.js'
import expenses from '../fixtures/expensesFixture'

expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should correctly render ExpensesSummary with single Expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot()
})


test('should correctly render ExpensesSummary with multiple Expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[expenses]}/>)
    expect(wrapper).toMatchSnapshot()
})

