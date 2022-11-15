import axios from 'axios'
import React from 'react'

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
            Like
        </div>
    )
}

export default Like
