import React, { useEffect, useState } from 'react'
import { google } from './Config'

export const GoogleAuth = () => {
    let obj;
    let [data, setData] = useState(null)
    const handleAuth = () => {

        google().then((res) => {
            setData(res.user)
        })
    }
    useEffect(() => {
        handleAuth();
       // if (data)
           // console.log(data.displayName)
    }, [handleAuth])
    return (
        <div style={{border:"1px dotted orange",padding:"2rem"}}>
            <button style={{background:"white", color:"navy", border:"1px solid gray",padding:"1rem",fontSize:"17px"}} onClick={handleAuth}>Sign In With Google</button>
            {
                data ? (<div >
                    <h4>{data.displayName}</h4>
                    <h4>{data.email}</h4>
                    <h4>{data.phoneNumber}</h4>
                    <h4>varified{data.emailVerified}</h4>
                    <img src={data.photoURL} alt="" ></img>
                </div>

                ) : null

            }
        </div>
    )
}
