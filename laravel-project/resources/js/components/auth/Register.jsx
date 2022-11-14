import axios from 'axios'
import React, { useState } from 'react'

function Register() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const NameChange = (e) => {
        setName(e.target.value)
    }

    const EmailChange = (e) => {
        setEmail(e.target.value)
    }

    const PasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const RegisterLogin = () => {

        const data = new FormData()

        data.append("name",name)
        data.append("email",email)
        data.append("password",password)

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
        <div>
            <div>
                <div>name</div>
                <div>
                    <input type="text" onChange={NameChange} />
                </div>
            </div>
            <div>
                <div>email</div>
                <div>
                    <input type="text" onChange={EmailChange} />
                </div>
            </div>
            <div>
                <div>password</div>
                <div>
                    <input type="text" onChange={PasswordChange} />
                </div>
            </div>
            <div onClick={RegisterLogin}>新規登録</div>
        </div>
    )
}

export default Register
