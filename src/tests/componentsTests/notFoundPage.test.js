import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json'
import NotFoundPage from '../../Components/NotFoundPage'

expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should Render Not Found Expense Page', () => {
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})