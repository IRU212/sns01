import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import styles from '../../../public/css/profile.module.scss'
import NotUserPage from './NotUserPage'

function Profile() {

    const [data,setData] = useState()
    const [loginUser,setLoginUser] = useState(1)

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/profile/${productId}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    useLayoutEffect(() => {
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setLoginUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{width: "100%"}}>
            { loginUser == 1 ?
                <NotUserPage />
                :
                <div className={styles.Profile}>
                    <div className={styles.BackImg}>
                        <img src="https://kabekin.com/uploads/converted/15/03/12/2029910762-kabekin.net_1920x1080_-_2022-04-03T123516_.788_-BLBn-1920x1080-MM-100.jpg" alt="" />
                    </div>
                    <div className={styles.ProfileDiv}>
                        <div className={styles.Icon}>
                            <img src="https://play-lh.googleusercontent.com/VkPPNilHH1IzQnBJB1SEwhzt2-tDTBqLihvbsFeITNqX8gMoaKxEkdfCWnlWwmKEFw=w240-h480-rw" alt="" />
                        </div>
                        <div className={styles.ProfileText}>
                            <div className={styles.Name}>
                                { data?.name }
                            </div>
                            <div>
                                いろいろ
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile
