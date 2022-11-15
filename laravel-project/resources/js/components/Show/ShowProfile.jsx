import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from '../../../../public/css/show.module.scss'
import { Link } from 'react-router-dom'

function ShowProfile(props) {

    // 商品情報
    const productInfo = props.productInfo

    return (
        <Link to={`../profile/${productInfo?.user.id}`} className={styles.Link}>
            <div className={styles.ShowProfile}>
                <div className={styles.Icon}>
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/Portrait%20Product%20Image-JAP_1200x1600-10646c99057796aed7b9c29b8165e502" alt="" />
                </div>
                <div className={styles.Name}>
                    { productInfo?.user.name }
                </div>
            </div>
        </Link>
    )
}

export default ShowProfile
