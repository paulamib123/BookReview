import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Search from './Search'
import BookReview from './BookReview'

class App extends Component {
    state = {
        login: false
    }

    render() {
            return (
        <div>
            <Router>
                <div style={headerStyle}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/signup">Signup</Link>
                    </li>
                </ul>
                </div>

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/review/:isbn" component={BookReview}></Route>
                </Switch>
            </Router>
        </div>
    )
    }
}

const headerStyle = {
    overflow: 'hidden',
    padding: '5px 5px'
}

export default App