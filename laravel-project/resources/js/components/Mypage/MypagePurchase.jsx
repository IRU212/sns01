import React from 'react'
import { useState } from 'react'
import styles from '../../../../public/css/mypage.module.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MypagePurchase() {

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/mypage/purchase/index')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.MypageLike}>
            <div className={styles.Title}>
                購入した商品一覧
            </div>
            <div className={styles.List}>
                { data?.map((item,index) =>
                    <Link to={`/product/${item.id}`} className={styles.Link}>
                        <div key={index} className={styles.Item}>
                            <div className={styles.ImageDiv}>
                                <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                            </div>
                            <div className={styles.Name}>
                                { item.name }
                            </div>
                            <div className={styles.Money} >
                                ￥{ item.money }
                            </div>
                        </div>
                    </Link>
                ) }
            </div>
        </div>
    )
}

export default MypagePurchase
