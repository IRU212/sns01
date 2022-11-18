import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../public/css/home.module.scss'

function SearchResult() {
    const [data,setData] = useState()

    // 現在のURL取得
    const locationUrl = location.href

    // 検索文字を取得
    const searchText = locationUrl.split("/").slice(-1)[0].slice(0,-1)

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/candidate/${searchText}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.HomeItem}>
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <Link to={`/product/${item.id}`}>
                        <div className={styles.ItemImg}>
                            <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                        </div>
                    </Link>
                </div>
            ) }
        </div>
    )
}

export default SearchResult
