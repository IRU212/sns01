import axios from 'axios'
import React from 'react'

function Follow(props) {

    // ユーザID
    const userId = props.userId

    const FollowClick = () => {
        axios
            .post(`http://localhost:8000/api/follow/${userId}/store`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={FollowClick}>
            フォロー
        </div>
    )
}

export default Follow
