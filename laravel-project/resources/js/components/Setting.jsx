import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'
import Logout from './auth/Logout'
import NotUserPage from './NotUserPage'

function Setting() {

    const [loginUser,setLoginUser] = useState(1)

    useLayoutEffect(() => {
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setLoginUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{width: "100%"}}>
            { loginUser == 1 ?
                <NotUserPage />
                :
                <div>
                    <div>
                        Setting
                    </div>
                    <Logout />
                </div>
            }
        </div>
    )
}

export default Setting
