import axios from 'axios'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from '../../../../public/css/show.module.scss'

function Like(props) {

    // 商品ID
    const productId = props.productId

    const LikeClick = () => {
        axios
            .post(`http://localhost:8000/api/like/${productId}/store`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={LikeClick}>
            <FavoriteBorderIcon
                className={styles.Like}
            />
        </div>
    )
}

export default Like
