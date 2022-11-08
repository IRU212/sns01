import React, { useState } from 'react'
import styles from '../../../../public/css/content.module.scss'
import { Link } from "react-router-dom";

function Side() {

    const [display,setDisplay] = useState(false)

    const displayClick = (e) => {
        if (e.target == e.currentTarget) {
            setDisplay(!display)
        }
    }

    const displayToggleClick = () => {
        setDisplay(!display)
    }

    return (
        <div>
            <div className={styles.SideButton} onClick={displayToggleClick}>
                <div className={styles.humberger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            { display ?
                <div className={styles.Side} onClick={(e) => {
                    displayClick(e)
                 }}
                >
                    <div className={styles.SideCover}>
                        <Link to="home" style={{textDecoration:"none",color:"#000"}}>
                            <div className={styles.Link} onClick={displayToggleClick}>
                                ホーム
                            </div>
                        </Link>
                        <Link to="profile" style={{textDecoration:"none",color:"#000"}}>
                            <div className={styles.Link} onClick={displayToggleClick}>
                                プロフィール
                            </div>
                        </Link>
                        <Link to="create" style={{textDecoration:"none",color:"#000"}}>
                            <div className={styles.Link} onClick={displayToggleClick}>
                                出品
                            </div>
                        </Link>
                        <Link to="situation" style={{textDecoration:"none",color:"#000"}}>
                            <div className={styles.Link} onClick={displayToggleClick}>
                                取引状況
                            </div>
                        </Link>
                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}

export default Side
