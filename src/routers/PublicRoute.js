import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    // console.log(!isAuthenticated)
    return (
        <Route {...rest} component={(props) => (
            !isAuthenticated ? (

                <Component {...props} />

            ) : (<Redirect to='/dashboard' />)
        )} />
    )
}

const maptStateToProps = (state) => ({
    isAuthenticated: !!state.uid
})

export default connect(maptStateToProps)(PublicRoute)