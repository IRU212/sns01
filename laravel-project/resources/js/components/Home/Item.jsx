import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../../public/css/home.module.scss'

function Item() {

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/product')
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
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
                        { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
            { data?.map((item,index) =>
                <div key={index} className={styles.List}>
                    <div className={styles.ItemImg}>
                        <img src={`http://localhost:8000/${item.image_path}`} alt="" />
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Item
