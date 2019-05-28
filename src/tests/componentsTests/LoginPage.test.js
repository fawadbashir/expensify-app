import React from 'react'
import { shallow } from 'enzyme'
import {createSerializer} from 'enzyme-to-json'
import { startLogin } from '../../actions/auth'
import {LoginPage} from '../../Components/LoginPage'

expect.addSnapshotSerializer(createSerializer({mode: 'shallow'}))



test('should render Login Page Correctly', () => {
    const wrapper = shallow(<LoginPage startLogin = {startLogin}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () =>{
    const startLogin= jest.fn()
    const wrapper = shallow(<LoginPage startLogin = {startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})
