import React, {Component} from "react";

class Condotion extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }
    render(){
        return this.state.isLogin ?(
            <div>Login Successful</div>
        ) :(
            <div>Please Login to Continue</div>
        )
        // let message
        // if(this.state.isLogin){
        //     message=<div>login Successful</div>
        // }
        // else{
        //     message=<div>Please login first to continue</div>
        // }
        // return <div>{message}</div>
    }
}
export default Condotion