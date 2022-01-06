import React from 'react'

export default function About(props) {
    //  const [mystyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let mystyle={
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#2d3436':'white'
    }
     return (
        <div>
             <div className="container my-3" style={mystyle}>
               <p style={mystyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nemo ducimus, enim esse dolorem sint commodi a assumenda, quasi sunt accusantium sed quam illo omnis necessitatibus fugit laborum illum provident?</p>
            </div>
        </div>
    )
}

