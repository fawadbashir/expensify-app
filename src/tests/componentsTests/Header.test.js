import React from 'react'
import {createSerializer} from 'enzyme-to-json';
import { shallow } from 'enzyme'
import {Header} from '../../Components/Header'
import { startLogout } from '../../actions/auth'
expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}));




test('should render Header correctly', () => {
    

    const wrapper = shallow(<Header startLogout = {startLogout}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const startLogout= jest.fn()
    const wrapper = shallow(<Header startLogout = {startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})