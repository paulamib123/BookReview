import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Search from './Search'
import Book from './Book'

function App() {

    return (
        <div>
            <Router>
                <div className="main">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/signup">Sign Up</a>
                        </li>
                        <li>
                            <a href="/login">Log In</a>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="books/ :isbn" component={Book}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App