import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import axios from 'axios'
import styles from '../../../public/css/content.module.scss'
import NotUserPage from './NotUserPage'

function Create() {

    const [name,setName] = useState('')
    const [introduce,setIntroduce] = useState('')
    const [image,setImage] = useState('')
    const [money,setMoney] = useState('')
    const [genre,setGenre] = useState('')

    // 未ログイン判定
    const [loginUser,setLoginUser] = useState(1)

    useLayoutEffect(() => {
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setLoginUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // 未入力がある際はボタン不可能
    const buttonBlock = 5

    // 画像プレビュー
    const userImg = useRef()

    const NameChnage = (e) => {
        setName(e.target.value)
    }

    const IntroduceChnage = (e) => {
        setIntroduce(e.target.value)
    }

    const ImageChange = (e) => {
        const imageTarget = e.target.files[0]

        setImage(imageTarget)

        // ファイルサイズが1MBより大きい
        if (imageTarget.size / (1024 * 1024) > 1) {
            setImage(null)
            const imageSizeMessage = "画像サイズが1MBより小さい画像を選択してください"
            window.alert(imageSizeMessage)
        }

        // プレビュー機能
        userImg.current.title = imageTarget.name
        const reader = new FileReader()
        reader.onload = (e) => {
            userImg.current.setAttribute('src',e.target.result)
        }
        reader.readAsDataURL(imageTarget)
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
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div style={{width: "100%"}}>
            { loginUser == 1 ?
                <NotUserPage
                    transitionUrl={location.href}
                />
                :
                <div className={styles.Create}>
                    <div className={styles.CreateDiv}>
                        <div className={styles.CreateItem}>
                            <div className={styles.title}>商品名</div>
                            <div>
                                <input type="text" value={name} className={styles.inputText} onChange={NameChnage} />
                            </div>
                        </div>
                        <div className={styles.CreateItem}>
                            <div className={styles.title}>商品紹介</div>
                            <div>
                                <input type="text" value={introduce} className={styles.inputText} onChange={IntroduceChnage} />
                            </div>
                        </div>
                        <div className={styles.CreateItem}>
                            <div>
                                <input type="file" id='uploadFile' accept="image/*" onChange={ImageChange} style={{display:"none"}} />
                            </div>
                            <label htmlFor="uploadFile">
                                {/* エラー防止読み込み用 */}
                                <img ref={userImg} className={styles.PreviewImg} style={{display:"none"}} alt="" />

                                { image == null ?
                                    <img src="https://icon-pit.com/wp-content/uploads/2018/10/camera_icon_677-300x300.png"
                                        className={styles.PreviewImg}
                                        alt=""
                                    />
                                    :
                                    <img ref={userImg} className={styles.PreviewImg} alt="" />
                                }
                            </label>
                        </div>
                        <div className={styles.CreateItem}>
                            <div className={styles.title}>値段</div>
                            <div>
                                <input type="text" className={styles.inputText} onChange={MoneyChnage} />
                            </div>
                        </div>
                        <div className={styles.CreateItem}>
                            <div className={styles.title}>ジャンル</div>
                            <div>
                                <select required value={genre} onChange={GenreChnage}>
                                    <option value="">選択してください</option>
                                    <option value="1">本</option>
                                    <option value="2">音楽</option>
                                    <option value="3">パソコン</option>
                                    <option value="4">服</option>
                                    <option value="5">おもちゃ</option>
                                    <option value="6">家具</option>
                                    <option value="7">その他</option>
                                </select>
                            </div>
                        </div>
                        { !name == '' && !introduce == '' && !image == ''  && !money == '' && !genre == ''  ?
                            <div onClick={ProductClick} className={styles.Button}>
                                出品
                            </div>
                            :
                            <div className={styles.ButtonNone}>
                                出品
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Create
