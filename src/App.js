import React from 'react'
import {Route, Switch} from "react-router-dom"

import './Style/style.scss'
import Home from './Components/Home'
import Events from './Components/Events'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/events' component={Events} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Home} />
            </Switch>
            <Footer />

           
        </div>
    )
}

export default App
