import axios from 'axios'
import React from 'react'
import styles from '../../../../public/css/show.module.scss'

function PurchaseTransactionButton(props) {

    const productId = props.productId

    const PurchaseClick = () => {

        const data = new FormData()
        data.append("product_id",productId)

        axios
            .post(`http://localhost:8000/api/transaction_room/${productId}/store`,data)
            .then((res) => {
                console.log(res.data)
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
