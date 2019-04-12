import React from 'react'
import {createSerializer} from 'enzyme-to-json';
import { shallow } from 'enzyme'
import Header from '../../Components/Header'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})