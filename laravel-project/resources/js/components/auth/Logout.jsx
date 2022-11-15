import axios from 'axios'
import React from 'react'

function Logout() {

    const LogoutClick = () => {
        axios
            .post("http://localhost:8000/api/logout/user/store")
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={LogoutClick}>
            ログアウト
        </div>
    )
}

export default Logout
