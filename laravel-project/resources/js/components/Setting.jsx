import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'
import Logout from './auth/Logout'
import NotUserPage from './NotUserPage'
import styles from '../../../public/css/setting.module.scss'
import AcountDestory from './auth/AcountDestory'

function Setting() {

    const [loginUser,setLoginUser] = useState(1)

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
                <div className={styles.Setting}>
                    <div className={styles.Title}>
                        設定一覧
                    </div>
                    <div className={styles.Item}>
                        <div className={styles.ItemDiv}>
                            <Logout />
                        </div>
                        <div className={styles.ItemDiv}>
                            <AcountDestory />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Setting
