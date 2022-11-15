import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../../public/css/situation.module.scss'

function SituationLink() {
    return (
        <div className={styles.productTransaction}>
            <div className={styles.TitleTransaction}>
                <Link to="/situation">
                    一覧商品
                </Link>
            </div>
            <div className={styles.TitleTransaction}>
                <Link to="/situation/create">
                    出品商品
                </Link>
            </div>
            <div className={styles.TitleTransaction}>
                <Link to="/situation/purchase">
                    購入商品
                </Link>
            </div>
        </div>
    )
}

export default SituationLink
