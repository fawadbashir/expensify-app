import React,{Fragment} from 'react'
import { Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import Layout from '../Components/Layout';


export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    // const componentToRender = usertype => {
    //    if(usertype==='admin'){
    //        return <Admin></Admin>
    //    }
    //    else if{
           
    //    } 
    // }
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Fragment>
                    <Header/>
                    <Layout>
                    <Component {...props} />
                    </Layout>
                    </Fragment>

            ) : (<Redirect to='/' />)
        )} />
    )
}

const maptStateToProps = (state) => ({
    isAuthenticated : !state.uid
})

export default connect(maptStateToProps)(PrivateRoute)