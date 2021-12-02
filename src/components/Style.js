import React from "react";
import './style.css'

function Style(props){
    let className= props.primary ? 'primary':''
    return (
        <div>
            <h2 className={`${className} xl-size`}>StyleSheet</h2>
        </div>
    )

}
export default Style