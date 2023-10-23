import React, { useEffect, useState } from 'react'
import { signupWIthEmail } from '../Config';

export const SIgnUp = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("")
    let [msg, setMsg] = useState("")
    const handleSignUp = (e) => {
        e.preventDefault();
        try {
            signupWIthEmail(email, password)
                .then((res) => {
                    setMsg("SignUp Successfull  verification link sent to your email")
                    console.log(res)
                }
                )
        }
        catch (error) {
            console.log(error)
            setMsg("Errpr Some thing went wrong")

        }
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <h3>{msg}</h3>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <input type="paaword" placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button >SignUp</button>
            </form>
        </div>
    )
}
