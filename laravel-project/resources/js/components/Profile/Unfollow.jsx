import axios from 'axios'
import React from 'react'

function Unfollow(props) {

    // ユーザID
    const userId = props.userId

    const UnFollowClick = () => {
        axios
            .post(`http://localhost:8000/api/unfollow/${userId}/store`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={UnFollowClick}>
            フォロー解除
        </div>
    )
}

export default Unfollow
