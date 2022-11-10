import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../../../public/css/content.module.scss'
import Register from '../auth/Register'
import styled from '../../../../public/css/auth.module.scss'
import { Link } from 'react-router-dom'

function IconProfile() {

    const [data,setData] = useState()

    useEffect(() =>{
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // 未ログイン時に表示
    function NewRegister(){

        const [registerBlock,setRegisterBlock] = useState(false)

        const NewRegisterClick = () => {
            setRegisterBlock(!registerBlock)
        }

        return(
            <div className={styles.NewRegister}>
                <div onClick={NewRegisterClick}>
                    <Link to="/register">
                        <div>
                            新規登録
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        <div>
                            ログイン
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    // ログイン中に表示
    function ProfileIcon(){
        return(
            <div className={styles.IconProfileImg}>
                <img src="https://cdn.wikiwiki.jp/to/w/genshinwiki/%E5%88%BB%E6%99%B4/::ref/%E5%88%BB%E6%99%B4500.webp?rev=ce62d307e38f90493df3bfbc3988161c&t=20221018182841" alt="" />
            </div>
        )
    }

    // 1を受け取った場合は未ログイン
    function Sample(){
        if (data == 1) {
            return <NewRegister />
        } else {
            return <ProfileIcon />
        }
    }

    return(
        <div>
            <Sample />
        </div>
    )
}

export default IconProfile
