import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Show() {

    const [data,setData] = useState()

    // 現在のURL取得
    const locationUrl = location.href

    // 商品idを取得
    const productId = locationUrl.split("/").slice(-1)[0]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${productId}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    },[])

    return (
        <div>
            Show
        </div>
    )
}

export default Show
