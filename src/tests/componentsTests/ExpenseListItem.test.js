import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json';
import  ExpenseListItem  from '../../Components/ExpenseListItem'
import expenses from '../fixtures/expensesFixture'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should Render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem  {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})