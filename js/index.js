import ReactDOM from 'react-dom'
import React from 'react'

import { Navbar } from './components/navBar.jsx'
import {SaucisseTouch} from './components/saucisse.jsx'

function Body(){
    return(
        <div>
            <Navbar/>
            <SaucisseTouch/>
        </div>
    )
}

ReactDOM.render(
    <Body />,
    document.getElementById("app"),
)
