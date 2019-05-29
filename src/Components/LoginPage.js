import React from 'react'
import { connect } from 'react-redux'
import {startLogin} from '../actions/auth'

export const LoginPage = (props) => {
   console.log(props)
    return (
        <div><button onClick = {props.startLogin} >Login</button></div>
    )
}

const mapDispatchToProps = () => ({
    startLogin: startLogin()
})
export default connect(undefined,mapDispatchToProps)(LoginPage)