import axios from 'axios'
import React from 'react'

function Transaction() {

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    const PurchaseClick = () => {
        axios
            .post(`http://localhost:8000/api/purchase/${productId}/store`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div onClick={PurchaseClick}>
                購入する
            </div>
        </div>
    )
}

export default Transaction
