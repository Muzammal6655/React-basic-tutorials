import React,{Component} from "react";

class State extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increament(){
        this.setState(prevState=>(
            {count: prevState.count +1}),
            ()=>{
                console.log("call back value ",this.state.count)
            }
        )
        console.log(this.state.count)
    }
    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }
    render(){
        return(
            <div>
                <div>Count = {this.state.count}</div>
                <button onClick={()=>this.increamentFive()}> increament</button>
            </div>
        )
    }
}
export default State