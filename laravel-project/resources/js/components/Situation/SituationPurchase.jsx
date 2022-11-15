import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../../../../public/css/situation.module.scss'
import { Link } from 'react-router-dom'
import SituationLink from './SituationLink'

function SituationPurchase() {

    const [data,setData] = useState()
    const [userID,setUserId] = useState()

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

        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setUserId(res.data.id)
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
                <div>
                    { !item.user_id == userID ?
                        <Link  key={index} to={`../product/${item.id}`} style={{color:"#000"}}>
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
                        :
                        <div>
                            { index == 0 &&
                                <div>
                                    商品がありません
                                </div>
                            }
                        </div>
                    }
                </div>
            ) }
        </div>
    )
}

export default SituationPurchase
