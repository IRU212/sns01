import React, { useLayoutEffect } from 'react'
import styles from '../../../../public/css/setting.module.scss'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function SettingProfile() {

    const [data,setData] = useState()

    // 保存するデータ
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [iconImage,setIconImage] = useState('')
    const [backImage,setBackImage] = useState('')

    useLayoutEffect(() => {
        axios
            .get("http://localhost:8000/api/login/user")
            .then((res) => {
                setData(res.data)
                setName(res.data?.name)
                setEmail(res.data?.email)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // 画像プレビュー
    const iconPreviewImg = useRef()
    const backPreviewImg = useRef()

    const NameChange = (e) => {
        setName(e.target.value)
    }

    const EmailChange = (e) => {
        setEmail(e.target.value)
    }

    const IconImageChange = (e) => {
        const imageTarget = e.target.files[0]

        setIconImage(imageTarget)

        // プレビュー機能
        iconPreviewImg.current.title = imageTarget.name
        const reader = new FileReader()
        reader.onload = (e) => {
            iconPreviewImg.current.setAttribute('src',e.target.result)
        }
        reader.readAsDataURL(imageTarget)
    }

    const BackImageChange = (e) => {
        const imageTarget = e.target.files[0]

        setBackImage(imageTarget)

        // プレビュー機能
        backPreviewImg.current.title = imageTarget.name
        const reader = new FileReader()
        reader.onload = (e) => {
            backPreviewImg.current.setAttribute('src',e.target.result)
        }
        reader.readAsDataURL(imageTarget)
    }

    const EditClick = () => {

        const data = new FormData()
        data.append('name',name)
        data.append('email',email)
        data.append('icon_image',iconImage)
        data.append('back_image',backImage)

        axios
            .post('http://localhost:8000/api/setting/profile/store',data,{
                headers:{
                    "Content-type": "multipart/form-data"
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
        <div className={styles.SettingProfile}>
            <div className={styles.Title}>
                プロフィール設定
            </div>
            <div className={styles.BackImg}>
                <label htmlFor="backImage" className={styles.BackImgDiv}>
                    { backImage == '' ?
                        <img src={`http://localhost:8000/${data?.back_path}`} alt="" />
                        :
                        <img ref={backPreviewImg} alt="" />
                    }
                </label>
                <input type="file" id='backImage' accept='image/*' style={{display:"none"}} onChange={BackImageChange} />
            </div>
            <div className={styles.editProfile}>
                <div className={styles.Left}>
                    <div className={styles.InputDiv}>
                        <div>ニックネーム</div>
                        <div>
                            <input type="text" placeholder={data?.name} onChange={NameChange} />
                        </div>
                    </div>
                    <div className={styles.InputDiv}>
                        <div>メールアドレス</div>
                        <div>
                            <input type="text" placeholder={data?.email} onChange={EmailChange} />
                        </div>
                    </div>
                    <div onClick={EditClick} className={styles.Button}>
                        変更
                    </div>
                </div>
                <div className={styles.Right}>
                    {/* エラー防止用 */}
                    <img ref={iconPreviewImg} style={{display:"none"}} alt="" />

                    <div className={styles.Icon}>
                        <label htmlFor="icon">
                            { iconImage == '' ?
                                <img src={`http://localhost:8000/${data?.icon_path}`} alt="" />
                                :
                                <img ref={iconPreviewImg} alt="" />
                            }
                        </label>
                    </div>
                    <div>
                        <input type="file" id='icon' accept='image/*' onChange={IconImageChange} style={{display:"none"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingProfile
