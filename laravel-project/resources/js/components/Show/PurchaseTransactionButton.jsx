import axios from 'axios'
import React from 'react'
import styles from '../../../../public/css/show.module.scss'

function PurchaseTransactionButton(props) {

    const productId = props.productId
    const productUserId = props.productUserId

    const PurchaseClick = () => {

        const roomData = new FormData()
        roomData.append("product_id",productId)

        axios
            .post(`http://localhost:8000/api/transaction_room/${productId}/store`,roomData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        const userData = new FormData()
        userData.append("product_id",productId)
        userData.append("user_id",productUserId)

        axios
            .post("http://localhost:8000/api/transaction_user/store",userData)
            .then(() => {
                location.href = `http://localhost:8000/product/room/${productId}`
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={PurchaseClick} className={styles.PurchaseButton}>
            <div>
                購入手続き
            </div>
        </div>
    )
}

export default PurchaseTransactionButton
