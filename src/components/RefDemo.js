import React, {Component} from "react";

class RefDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    inputHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button type='submit' onClick={this.inputHandler}> Button</button>
            </div>
        )
    }
}
export default RefDemo