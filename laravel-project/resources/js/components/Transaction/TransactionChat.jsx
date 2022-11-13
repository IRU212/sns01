import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styles from '../../../../public/css/transaction.module.scss'

function TransactionChat(props) {

    // 商品ID
    const productId = props.productId

    const [chat,setChat] = useState()

    const PostClick = () => {

        const data = new FormData()
        data.append("chat",chat)

        axios
            .post(`http://localhost:8000/api/transaction/chat/${productId}/store`,data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const ChatChange = (e) => {
        setChat(e.target.value)
    }

    return (
        <div>
            <div className={styles.ChatINput}>
                <input type="text" onChange={ChatChange} />
            </div>
            <div className={styles.ChatButton} onClick={PostClick}>
                送信
            </div>
        </div>
    )
}

export default TransactionChat
