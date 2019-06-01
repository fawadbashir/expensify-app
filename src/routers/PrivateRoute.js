import React,{Fragment} from 'react'
import { Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Components/Header'


export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    // console.log(isAuthenticated)
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Fragment><Header />
                    <Component {...props} /></Fragment>

            ) : (<Redirect to='/' />)
        )} />
    )
}

const maptStateToProps = (state) => ({
    isAuthenticated : !state.uid
})

export default connect(maptStateToProps)(PrivateRoute)