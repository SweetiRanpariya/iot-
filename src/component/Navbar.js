import logo from './logo.svg';  
import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
      
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">{props.page1}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{props.page2}</a>
                    </li>
                    
                </ul>
               <div className="flex-end ml-auto">
               <i onClick={props.toggleMode} >{props.icon}</i>
               </div>
            </nav> 
        </div>
    )
}
