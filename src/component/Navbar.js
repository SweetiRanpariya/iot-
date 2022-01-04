import logo from './logo.svg';  
import React from 'react'

export default function Navbar(propes) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">{propes.page1}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{propes.page2}</a>
                    </li>
                    
                </ul>
            </nav> 
        </div>
    )
}
