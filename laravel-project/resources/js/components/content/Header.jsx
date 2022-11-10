import React, { useEffect, useState } from 'react'
import styles from '../../../../public/css/content.module.scss'
import axios from 'axios'
import IconProfile from './IconProfile'

function Header() {

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.Header}>
            <div className={styles.HeaderIcon}>
                <IconProfile />
            </div>
        </div>
    )
}

export default Header
