import React, { useState } from 'react'
import { resetPassword, signinWithEmail } from '../Config';

export const Signin = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("")
    let [msg, setMsg] = useState("")
    const handleSignin = (e) => {
        e.preventDefault();
        try {
            signinWithEmail(email, password)
                .then((res) => {
                    if (res.user.emailVerified)
                        setMsg("Signin Successfull")
                    else
                        setMsg("email is not verified")

                }
                )
        }
        catch (error) {
            setMsg("Error Some thing went wrong")

        }
    }
    const handleReset = () => {
        try {
            resetPassword(email)
            .then((res) => setMsg("Password reset link sent you in email"))
        }
        catch {
            setMsg("Error Some thing went wrong")

        }
    }

    return (
        <div>
            <form onSubmit={handleSignin}>
                <h3>{msg}</h3>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <input type="paaword" placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button >Sign In</button>
                <div><a  onClick={handleReset} >Reset Password </a></div>
            </form>
        </div>
    )
}
