import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../../../public/css/situation.module.scss'
import { Link, Routes, Route } from 'react-router-dom'
import SituationPurchase from './Situation/SituationPurchase'
import SituationLink from './Situation/SituationLink'

function Situation() {

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/situation/index")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.Situation}>
            <div className={styles.Title}>
                取引商品リスト
            </div>
            <SituationLink
                productUserId={data?.user_id}
            />
            { data?.map((item,index) =>
                <Link key={index} to={`../product/${item.id}`} style={{color:"#000"}}>
                    <div className={styles.item}>
                        <div>
                            <img src={`http://localhost:8000/${item?.image_path}`} alt="" />
                        </div>
                        <div className={styles.name}>
                            { item.name }
                        </div>
                        <div className={styles.situation}>
                            { item.situation.situation_name }
                        </div>
                    </div>
                </Link>
            ) }
        </div>
    )
}

export default Situation
