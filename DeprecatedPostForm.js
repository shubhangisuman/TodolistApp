import React, {Component} from "react";
// import withAxios from "react-axios/lib/components/withAxios";
// import {AxiosInstance as axios} from "axios";
import axios from "axios";
class DeprecatedPostForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            item:'',
            completed:''
        }
    }
    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/todo",this.state)
        window.location.reload()
    }
    render(){
        const {id,item,completed} = this.state;
    return(
        <div>

        </div>
    )
    }
}
export default DeprecatedPostForm