import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../../../public/css/situation.module.scss'
import { Link } from 'react-router-dom'

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
            { data?.map((item,index) =>
                <div key={index} className={styles.item}>
                    <div>
                        <img src={`http://localhost:8000/${item?.image_path}`} alt="" />
                    </div>
                    <div>
                        { item.name }
                    </div>
                    <div>
                        { item.situation.situation_name }
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Situation
