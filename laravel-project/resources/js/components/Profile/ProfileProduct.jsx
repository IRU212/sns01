import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../../../../public/css/profile.module.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProfileProduct(props) {

    const [data,setData] = useState()

    // ユーザID
    const profileId = props.profileId

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/profile/product/${profileId}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.ProfileProduct}>
            <div className={styles.Title}>
                出品した商品
            </div>
            <div className={styles.ListProduct}>
                { data?.map((item,index) =>
                    <div key={index} className={styles.List}>
                        <Link to={`/product/${item.id}`}>
                            <div className={styles.ItemImg}>
                                <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                            </div>
                        </Link>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default ProfileProduct
