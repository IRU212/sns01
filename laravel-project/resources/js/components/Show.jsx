import React, { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../../../public/css/show.module.scss'
import PurchaseTransactionButton from './Show/PurchaseTransactionButton'
import Like from './Content/Like'
import UnLike from './Content/UnLike'
import ShowProfile from './Show/ShowProfile'

function Show() {

    const [data,setData] = useState()
    const [like,setLike] = useState()

    // 購入済み情報取得
    const [doneButton,setDoneButton] = useState()

    // 購入済みボタン判定
    const [buttonToggle,setButtonToggle] = useState(true)

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    useLayoutEffect(() => {
        // 商品情報取得
        axios
            .get(`http://localhost:8000/api/product/${productId}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    useLayoutEffect(() => {

        // 購入済み判定
        axios
            .get(`http://localhost:8000/api/product/transaction/${productId}`)
            .then((res) => {
                setButtonToggle(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        // いいね情報取得
        axios
            .get(`http://localhost:8000/api/like/${productId}/index`)
            .then((res) => {
                setLike(res.data)
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
                <div>
                    { like == false ?
                        <Like
                            productId={productId}
                        />
                        :
                        <UnLike
                            productId={productId}
                        />
                    }
                </div>
                <div className={styles.Seller}>
                    出品者
                </div>
                <ShowProfile
                    productInfo={data}
                />
                { buttonToggle == true ?
                    <PurchaseTransactionButton
                        productId={productId}
                        productUserId={data?.user_id}
                    />
                    :
                    <div className={styles.PurchaseButton}>
                        <div>
                            完売
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Show
