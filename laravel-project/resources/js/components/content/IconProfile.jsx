import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from '../../../../public/css/content.module.scss'
import Register from '../auth/Register'
import styled from '../../../../public/css/auth.module.scss'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function IconProfile() {

    const [data,setData] = useState()

    useLayoutEffect(() =>{
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
                    <Link to="/register" className={styles.LinkLAuth}>
                        <div>
                            新規登録
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/login" className={styles.LinkLAuth}>
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
                { data?.icon_path == null ?
                    <AccountCircleIcon style={{fontSize:"44px", color:"#888"}} />
                    :
                    <a href={`http://localhost:8000/profile/${data?.id}`}>
                        <img src={`http://localhost:8000/${data?.icon_path}`} alt="" />
                    </a>
                }
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
