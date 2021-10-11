import React from 'react'
import "../scss/login.scss"
const Login = ({setLogin}) => {
    return (
        <div className="container">
            <div className="login">
                <div className="login-with-friend">
                    <div className="btn" onClick={()=>setLogin(true)}>
                        Join With friend
                    </div>
                </div>
                <div className="login-random"></div>
            </div>
        </div>
    )
}

export default Login
