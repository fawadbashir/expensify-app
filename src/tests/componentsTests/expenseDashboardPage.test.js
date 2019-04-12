import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import  ExpenseDashboardPage  from '../../Components/ExpenseDashboardPage'
import expenses from '../fixtures/expensesFixture'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should Render Dashboard Expense Page', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})