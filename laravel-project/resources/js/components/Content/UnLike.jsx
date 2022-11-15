import axios from 'axios'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from '../../../../public/css/show.module.scss'

function UnLike(props) {

    // 商品ID
    const productId = props.productId

    const UnLickClick = () => {
        axios
            .post(`http://localhost:8000/api/unlike/${productId}/store`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={UnLickClick}>
            <FavoriteIcon
                className={styles.UnLike}
            />
        </div>
    )
}

export default UnLike
