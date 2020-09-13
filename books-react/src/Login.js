import React from 'react'
import { useFormik } from 'formik'
import { FaUserAlt } from "react-icons/fa"
import { FaLock } from 'react-icons/fa'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (values) => {
            axios
            .post('http://127.0.0.1:5000/login', values)
            .then(response => {
                console.log(response)
                if(response.status === 200)
                {
                    console.log("success")
                    history.push("/search/")
                }
            })
            .catch(error => console.log(error))
    }
    })


    return (
        <div>
            <header className="login-header">
                <div className="login-box">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="text-box">
                            <FaUserAlt color="white" className="icons" />
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>

                        <div className="text-box">
                            <FaLock color="white" className="icons" />
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>

                        <button className="form-button" type="submit">
                            Log In
                        </button>

                    </form>
                </div>
            </header>
        </div>
    )
}

export default Login


