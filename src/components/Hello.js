import React from "react";

const Hello = () => {
    // return (<div>
    //     <h1>
    //         Hello from Hello Component
    //     </h1>
    // </div>)
    return React.createElement(
    'div',
    {id: 'text-heading',className:'text-class'},
    React.createElement(
        'h1',
        null,
        'Hello Muzammail'
        )
    )
}
export default Hello