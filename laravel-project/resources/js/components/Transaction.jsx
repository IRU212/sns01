import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from '../../../public/css/transaction.module.scss'
import TransactionChat from './Transaction/TransactionChat'

function Transaction() {

    const [chatData,setChatData] = useState()
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
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:8000/api/transaction/chat/${productId}/index`)
            .then((res) => {
                setChatData(res.data)
                console.log(res.data)
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

    const ConfirmClick = () => {
        axios
            .post(`http://localhost:8000/api/confirm/${productId}/store`)
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
                { chatData?.chat.map((item,index) =>
                    <div key={index} className={styles.ChatList}>
                        { item.user_id == chatData.user_id ?
                            <div className={styles.ChatMessgaeLeft}>{ item.chat }</div>
                            :
                            <div className={styles.ChatMessgaeRightCover}>
                                <div className={styles.ChatMessgaeRight}>{ item.chat }2</div>
                            </div>
                        }
                    </div>
                ) }
                <TransactionChat
                    productId={productId}
                />
            </div>
            { buttonJudgement == false ?
                <div onClick={PurchaseClick} className={styles.ConfirmButton}>
                    注文を確定する
                </div>
                :
                <div>
                    { buttonJudgement?.product_user_id.user_id == chatData?.user_id ?
                        <div className={styles.ConfirmButton}>
                            発送中
                        </div>
                        :
                        <div>
                            { buttonJudgement?.product_user_id.situation_id == 1 ?
                                <div className={styles.ConfirmButton}>
                                    商品が到着済み
                                </div>
                                :
                                <div className={styles.ConfirmButton} onClick={ConfirmClick}>
                                    商品が到着
                                </div>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Transaction
