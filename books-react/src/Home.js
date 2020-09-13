import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Home() {
    return (
        <div>
            <header className="header">
                <div className="title">
                    <h1>LEAVE YOUR BOOK REVIEW!</h1>
                </div>
                <div class="button">
                    <a href="http://localhost:3000/signup" class="btn">Join Us</a>
                    <a href="http://localhost:3000/login" class="btn">Log In</a>
                </div>
            </header>
        </div>
    )
}

export default Home
