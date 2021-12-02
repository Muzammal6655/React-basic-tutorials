import React, {Component} from "react";

class IncrementCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increament =()=>{
        this.setState(prevState=>{
            return{count:prevState.count + 1}
        })
    }

    render(){
        const {count}=this.state
        return(
            <button type='submit' onClick={this.increament}> Click to increament {count}</button>
        )
    }
}
export default IncrementCounter