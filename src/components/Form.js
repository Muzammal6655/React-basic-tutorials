import React,{Component} from "react";

class Form extends Component{
    constructor(props){
        super(props)
         this.state={
            userName:'',
            email:'',
            topic:'React'
        }
    }
    usernameHandler= event =>{
        this.setState({
            userName: event.target.value
        })
    }
    emailHandler = event=>{
        this.setState({
            email: event.target.value
        })
    }
    topicHandler = event=>{
        this.setState({
            topic: event.target.value
        })
    }
    submitHandler = event => {
        alert(`${this.state.userName} ${this.state.email} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        const {userName, email, topic}= this.state
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                <label>UserName</label>
                    <input type='text' value={userName} onChange={this.usernameHandler}></input>
                </div>
                <div>
                    <label> Email</label>
                    <input type='email' value={email} onChange={this.emailHandler}></input>
                </div>
                <div>
                    <label> Topic</label>
                    <select value={topic} onChange={this.topicHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='veu'>Veu</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form