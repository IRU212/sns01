import React from 'react'
import styles from '../../../public/css/content.module.scss'
import { Link } from 'react-router-dom'

function NotUserPage() {

    return (
        <div className={styles.NotUserPage}>
            <div className={styles.LoginTitle}>
                ログイン
            </div>
            <div className={styles.Button}>
                <Link to="/login" style={{textDecoration:"none",color:"#fff"}}>
                    ログインする
                </Link>
            </div>
            <div className={styles.Button}>
                <Link to="/register" style={{textDecoration:"none",color:"#fff"}}>
                    アカウント登録
                </Link>
            </div>
        </div>
    )
}

export default NotUserPage
