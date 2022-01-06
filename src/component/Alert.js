import React from 'react'

function Alert(props) {
    return (
        <div style={{height:"50px"}}>
       { props.alert && <div className={`alert alert-${props.alert.type} mx-3`}>
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>{props.alert.type}</strong> :{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
