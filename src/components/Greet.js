import React from 'react'

export function Geet(){
    return <h1>Hello from |Greet Component</h1>
}
export const Greet = props =>{ 
    return(
    <div>
        <h2>Hello {props.name}</h2>
        <h3>the post is {props.title}</h3>
        {props.children}
    </div>
    )
}