import React from 'react'
import { useFormik } from 'formik'
import { FaUserAlt } from "react-icons/fa"
import { FaLock } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: '',
        },
        
        onSubmit: (values) => {
                axios
                .post('http://127.0.0.1:5000/signup', values)
                .then(response => {
                    console.log(response)
                    if(response.status === 201)
                    {
                        console.log("success")
                        alert("Your account has been created! Please Login to continue.")
                        history.push("/login/")
                    }
                })
                .catch(error => console.log(error))
        }
        
    })

    return (
        <div>
            <header className="login-header">
                <div className="login-box">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
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

                        <div className="text-box">
                            <FaLock color="white" className="icons" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmpassword"
                                name="confirmpassword"
                                onChange={formik.handleChange}
                                value={formik.values.confirmpassword}
                            />
                        </div>

                        <button className="form-button" 
                        type="submit" 
                        >
                            Create Account
                        </button>

                    </form>
                </div>
            </header>
        </div>
    )
}

export default Signup
