import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import styles from '../../../public/css/profile.module.scss'
import NotUserPage from './NotUserPage'
import Follow from './Profile/Follow'
import Unfollow from './Profile/Unfollow'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileProduct from './Profile/ProfileProduct'

function Profile() {

    const [data,setData] = useState()
    const [loginUser,setLoginUser] = useState(1)
    const [follow,setFollow] = useState()

    // 現在のURL取得
    const locationUrl = location.href

    // ユーザidを取得
    const profileId = locationUrl.split("/").slice(-1)[0]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/profile/${profileId}`)
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
        axios
            .get(`http://localhost:8000/api/follow/${profileId}/index`)
            .then((res) => {
                setFollow(res.data)
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
                            { data?.icon_path == null ?
                                <AccountCircleIcon style={{fontSize:"83px"}} />
                                :
                                <img src={`http://localhost:8000/${data?.icon_path}`} alt="" />
                            }
                        </div>
                        <div className={styles.ProfileText}>
                            <div className={styles.Name}>
                                { data?.name }
                            </div>
                            <div className={styles.FollowCountPosition}>
                                <div>
                                    { follow?.following_count }フォロー
                                </div>
                                <div>
                                    { follow?.follower_count }フォローワー
                                </div>
                            </div>
                            <div className={styles.FollowPosition}>
                                { loginUser?.id == data?.id ?
                                    ""
                                    :
                                    <div>
                                        { follow?.is_follow == true ?
                                            <Unfollow
                                                userId={profileId}
                                            />
                                            :
                                            <Follow
                                                userId={profileId}
                                            />
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <ProfileProduct
                        profileId={profileId}
                    />
                </div>
            }
        </div>
    )
}

export default Profile
