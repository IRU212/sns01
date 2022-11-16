import axios from 'axios'
import React from 'react'
import styles from '../../../../public/css/profile.module.scss'

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
        <div onClick={UnFollowClick} className={styles.UnFollowButton} >
            フォロー中
        </div>
    )
}

export default Unfollow
