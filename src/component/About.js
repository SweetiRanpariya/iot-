import React,{useState} from 'react'

export default function About() {
     const [mystyle, setmystyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [icon, seticon] = useState(<i class="far fa-moon"></i>)

    const toggle = ()=>{
        if(mystyle.color === 'black'){
            setmystyle({
                color:'white',
                backgroundColor:'#424141'
            })
            seticon(<i class="fas fa-moon"></i>)
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor:'#ffffff'
            })
            seticon(<i class="far fa-moon"></i>)
        }
    }
     

    return (
        <div>
             <div className="container my-3" style={mystyle}>
                <i onClick={toggle} >{icon}</i>
                <p style={mystyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nemo ducimus, enim esse dolorem sint commodi a assumenda, quasi sunt accusantium sed quam illo omnis necessitatibus fugit laborum illum provident?</p>
            </div>
        </div>
    )
}

