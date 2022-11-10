import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Create() {

    const [name,setName] = useState()
    const [introduce,setIntroduce] = useState()
    const [image,setImage] = useState()
    const [money,setMoney] = useState()
    const [genre,setGenre] = useState()

    const NameChnage = (e) => {
        setName(e.target.value)
    }

    const IntroduceChnage = (e) => {
        setIntroduce(e.target.value)
    }

    const ImageChange = (e) => {
        setImage(e.target.files[0])
        console.log(e.target.files[0])
    }

    const MoneyChnage = (e) => {
        setMoney(e.target.value)
    }

    const GenreChnage = (e) => {
        setGenre(e.target.value)
    }

    const ProductClick = () => {

        const data = new FormData()

        data.append("name",name)
        data.append("introduce",introduce)
        data.append("image",image)
        data.append("money",money)
        data.append("genre_id",genre)

        axios
            .post("http://localhost:8000/api/product/store",data,{
                headers:{
                    "content-type": "multipart/form-data"
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>
                <div>商品名</div>
                <div>
                    <input type="text" onChange={NameChnage} />
                </div>
            </div>
            <div>
                <div>商品紹介</div>
                <div>
                    <input type="text" onChange={IntroduceChnage} />
                </div>
            </div>
            <div>
                <div>画像</div>
                <div>
                    <input type="file" accept="image/*" onChange={ImageChange} />
                </div>
            </div>
            <div>
                <div>値段</div>
                <div>
                    <input type="text" onChange={MoneyChnage} />
                </div>
            </div>
            <div>
                <div>ジャンル</div>
                <div>
                    <input type="text" onChange={GenreChnage} />
                </div>
            </div>
            <div onClick={ProductClick}>
                出品
            </div>
        </div>
    )
}

export default Create
