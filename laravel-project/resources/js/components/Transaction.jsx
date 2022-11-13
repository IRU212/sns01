import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from '../../../public/css/transaction.module.scss'

function Transaction() {

    const [buttonJudgement,setButtonJudgement] = useState()

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/purchase/${productId}/index`)
            .then((res) => {
                setButtonJudgement(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const PurchaseClick = () => {

        axios
            .post(`http://localhost:8000/api/purchase/${productId}/store`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.Transaction}>
            <div className={styles.Title}>
                取引画面
            </div>
            <div className={styles.ChatBox}>
                <div className={styles.ChatList}>
                    <div className={styles.ChatMessgaeLeft}>sample01</div>
                    <div className={styles.ChatMessgaeRightCover}>
                        <div className={styles.ChatMessgaeRight}>sample02</div>
                    </div>
                </div>
                <div className={styles.ChatINput}>
                    <input type="text" />
                </div>
            </div>
            { buttonJudgement == false ?
                <div onClick={PurchaseClick} className={styles.ConfirmButton}>
                    注文を確定する
                </div>
                :
                <div className={styles.SendNow}>
                    発送中
                </div>
            }
        </div>
    )
}

export default Transaction
