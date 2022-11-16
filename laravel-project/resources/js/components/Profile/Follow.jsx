import axios from 'axios'
import React from 'react'
import styles from '../../../../public/css/profile.module.scss'

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
        <div onClick={FollowClick} className={styles.FollowButton}>
            フォローする
        </div>
    )
}

export default Follow
