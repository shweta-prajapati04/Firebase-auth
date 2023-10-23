import React, { useState } from 'react'
import { resetPassword } from '../Config';

const Reset = () => {
    let [email, setEmail] = useState("");
    let [msg, setMsg] = useState("")
    
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
            <form onSubmit={handleReset}>
                <h3>{msg}</h3>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <button  onClick={handleReset}>Reset Password</button>
            </form>
        </div>
    )
}

export default Reset