import logo from './logo.svg';  
import React from 'react'
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { Popup } from 'reactjs-popup';


export default function Navbar(props) {
    
    const black=()=>{
        document.body.style.background = "#2d3436";
        document.body.style.color = "white";
    }
    const gray=()=>{
        document.body.style.background = "#687378";
        document.body.style.color = "white";
    }
    const chocolate=()=>{
        document.body.style.background = "#460000";
        document.body.style.color = "white";
    }
    const white=()=>{
        document.body.style.background = "#ffffff";
        document.body.style.color = "black";
    }



    return (
        <div>
            <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
      
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">{props.page1}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/About">{props.page2}</Link>
                    </li>
                    
                </ul>
               <div className="flex-end ml-auto">
               <i onClick={props.toggleMode} style={{ margin:"3px" , fontSize:"20px"}} >{props.icon} </i>
             
                
                <Popup trigger={<i class="fab fa-buromobelexperte" style={{ margin:"3px" , fontSize:"20px"}}>  </i>} 
                   position="bottom right">
                   
                    <div>
                    <i class="fas fa-square" onClick={black} style={{color: "#2d3436" , margin:"3px" , fontSize:"20px"}}></i>
                    <i class="fas fa-square" onClick={gray} style={{color: "#687378" , margin:"3px" , fontSize:"20px"}}></i>
                    <i class="fas fa-square" onClick={chocolate} style={{color: "#460000" , margin:"3px" , fontSize:"20px"}}></i>
                    <i class="fas fa-square" onClick={white} style={{color: "#ffffff" , margin:"3px" , fontSize:"20px", border :'1px solid black'}}></i>
                </div>
                
                </Popup>
          
              
               </div>
               
            </nav> 
            
        </div>
    )
}
