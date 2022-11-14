import axios from 'axios'
import React, { useState } from 'react'
import styles from '../../../../public/css/auth.module.scss'

function Login() {

    const [name,setName] = useState()

    const [password,setPassword] = useState()

    const NameChange = (e) => {
        setName(e.target.value)
    }

    const PasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const LoginClick = () => {

        const data = new FormData()

        data.append("name",name)
        data.append("password",password)

        axios
            .post('http://localhost:8000/api/login/user/store',data)
            .then((res) => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })

        // ひとつ前のURLに遷移
        history.back()
    }

    return (
        <div>
            <div>
                <div>ユーザ名</div>
                <div><input type="text" onChange={NameChange} /></div>
            </div>
            <div>
                <div>パスワード</div>
                <div><input type="text" onChange={PasswordChange} /></div>
            </div>
            <div onClick={LoginClick}>ログイン</div>
        </div>
    )
}

export default Login
