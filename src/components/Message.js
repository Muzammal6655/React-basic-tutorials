import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Hello Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    goback(){
        this.setState({
            message: 'Hello Visitor'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button  onClick={()=>this.changeMessage()}> Subscribe</button>
                <button onClick={()=>this.goback()}> go back</button>
            </div>
        )
    }
}
export default Message