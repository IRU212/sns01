import axios from 'axios'
import React, { useState } from 'react'
import styles from '../../../../public/css/auth.module.scss'

function Register() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [firstNameKana,setFirstNameKana] = useState()
    const [lastNameKana,setLastNameKana] = useState()
    const [iconPath,setIconPath] = useState()
    const [backPath,setBackPath] = useState()
    const [birthday,setBirthday] = useState()
    const [zip,setZip] = useState()
    const [address,setAddress] = useState()

    const NameChange = (e) => {
        setName(e.target.value)
    }

    const EmailChange = (e) => {
        setEmail(e.target.value)
    }

    const PasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const FirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const LastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const FirstNameKanaChange = (e) => {
        setFirstNameKana(e.target.value)
    }

    const LastNameKanaChange = (e) => {
        setLastNameKana(e.target.value)
    }

    const IconChange = (e) => {
        setIconPath(e.target.value)
    }

    const BackPathChange = (e) => {
        setBackPath(e.target.value)
    }

    const BirthdayChange = (e) => {
        setBirthday(e.target.value)
    }

    const ZipChange = (e) => {
        setZip(e.target.value)
    }

    const AddressChange = (e) => {
        setAddress(e.target.value)
    }

    const RegisterLogin = () => {

        const data = new FormData()

        data.append("name",name)
        data.append("email",email)
        data.append("password",password)
        data.append("first_name",firstName)
        data.append("last_name",lastName)
        data.append("first_name_kana",firstNameKana)
        data.append("last_name_kana",lastNameKana)
        data.append("icon_path",iconPath)
        data.append("back_path",backPath)
        data.append("birthday",birthday)
        data.append("zip",zip)
        data.append("address",address)

        axios
            .post('http://localhost:8000/api/auth/register/store',data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
        })

        // ひとつ前のURLに遷移
        history.back()
    }

    return (
        <div className={styles.Login}>
            <div className={styles.Title}>
                アカウント登録
            </div>
            <div className={styles.Form}>
                <div className={styles.InputDiv}>
                    <div>ニックネーム</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={NameChange} />
                    </div>
                </div>
                <div className={styles.Name}>
                    <div className={styles.InputDiv}>
                        <div>苗字</div>
                        <div>
                            <input type="text" onChange={FirstNameChange} />
                        </div>
                    </div>
                    <div className={styles.InputDiv}>
                        <div>名前</div>
                        <div>
                            <input type="text" onChange={LastNameChange} />
                        </div>
                    </div>
                </div>
                <div className={styles.NameKatakana}>
                    <div className={styles.InputDiv}>
                        <div>ミョウジ</div>
                        <div>
                            <input type="text" onChange={FirstNameKanaChange} />
                        </div>
                    </div>
                    <div className={styles.InputDiv}>
                        <div>ナマエ</div>
                        <div>
                            <input type="text" onChange={LastNameKanaChange} />
                        </div>
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <div>メールアドレス</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={EmailChange} />
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <div>生年月日</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={BirthdayChange} />
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <div>郵便番号</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={ZipChange} />
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <div>住所</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={AddressChange} />
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <div>パスワード</div>
                    <div>
                        <input type="text" className={styles.largeInput} onChange={PasswordChange} />
                    </div>
                </div>
                <div onClick={RegisterLogin} className={styles.Button}>
                    新規登録
                </div>
            </div>
        </div>
    )
}

export default Register
