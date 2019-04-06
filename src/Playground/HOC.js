
import React from 'react'
import ReactDOM from 'react-dom'

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>  
       {props.isAuthentication ? <WrappedComponent {...props}/> : (
           <p>You are not logged in please login</p>
       )}
        
      </div>
    )
}

const Info = (props) => (
    <div>
        
        <h1>Info</h1>
       <p>The info is: {props.info}</p>     
    

    </div>
)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthentication = {true} info = 'These are your details'/>, document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA

