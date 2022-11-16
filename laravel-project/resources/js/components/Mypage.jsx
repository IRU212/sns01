import React from 'react'
import styles from '../../../public/css/mypage.module.scss'
import { Link } from 'react-router-dom'

function Mypage() {
    return (
        <div className={styles.Mypage}>
            <div className={styles.Title}>
                Mypage
            </div>
            <div className={styles.Item}>
                <div className={styles.ItemDiv}>
                    <Link className={styles.Link} to="/mypage/like">
                        いいねした商品
                    </Link>
                </div>
                <div className={styles.ItemDiv}>
                    <Link className={styles.Link} to="/mypage/create">
                        出品した商品
                    </Link>
                </div>
                <div className={styles.ItemDiv}>
                    <Link className={styles.Link} to="/mypage/purchase">
                        購入した商品
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mypage
