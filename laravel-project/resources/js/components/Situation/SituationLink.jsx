import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from '../../../../public/css/situation.module.scss'

function SituationLink() {
    return (
        <div className={styles.productTransaction}>
            <div className={styles.TitleTransaction}>
                <Link to="/situation" className={styles.Link}>
                    一覧商品
                </Link>
            </div>
            <div className={styles.TitleTransaction}>
                <Link to="/situation/create" className={styles.Link}>
                    出品商品
                </Link>
            </div>
            <div className={styles.TitleTransaction} >
                <Link to="/situation/purchase" className={styles.Link}>
                    購入商品
                </Link>
            </div>
        </div>
    )
}

export default SituationLink
