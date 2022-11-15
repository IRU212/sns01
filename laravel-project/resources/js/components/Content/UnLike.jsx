import axios from 'axios'
import React from 'react'

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
            UnLike
        </div>
    )
}

export default UnLike
