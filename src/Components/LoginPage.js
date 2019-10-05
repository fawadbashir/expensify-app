import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import Button from 'react-bootstrap/Button'

export const LoginPage = (props) => {

    return (
        <div className='box-layout' >


            < Button size='lg' onClick={props.startLogin()} > Login</Button >


        </div>
    )
}

const mapDispatchToProps = () => ({
    startLogin: () => startLogin()
})
export default connect(undefined, mapDispatchToProps)(LoginPage)