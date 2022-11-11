import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../../../public/css/show.module.scss'

function Show() {

    const [data,setData] = useState()

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${productId}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    },[])

    return (
        <div className={styles.Show}>
            <div className={styles.productImg}>
                <img src={`http://localhost:8000/${data?.image_path}`} alt="" />
            </div>
            <div className={styles.ProductIntroduce}>
                <div className={styles.Title}>
                    { data?.name }
                </div>
                <div className={styles.money}>
                    ￥{ data?.money }
                </div>
                <div className={styles.PurchaseButton}>
                    <div>
                        購入手続き
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show
