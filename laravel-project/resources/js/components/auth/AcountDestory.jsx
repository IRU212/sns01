import axios from 'axios'
import React from 'react'

function AcountDestory() {

    const DestoryClick = () => {
        axios
            .post("http://localhost:8000/api/user/destory")
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={DestoryClick}>
            アカウント削除
        </div>
    )
}

export default AcountDestory
