import React, {Component} from "react";
import {Button} from "@material-ui/core";
// import  {BrowserRouter} from "react-router-dom";
import axios from "axios";
// function ClearAll(){
//     const styles={
//         left : "650px"
//     }
//     return(
//         <div>
//             <h1 align="centre">TODO</h1>
//             <Button variant="contained" style={styles} onClick={}>Clear All</Button>
//         </div>
//     )
// }
class ClearAll extends Component{
    deleteTodo(){
        // console.log(todo);
        // const newState = this.state.items.slice();
        // console.log(newState.splice(newState.indexOf(todo),1))
        // console.log(newState)
        axios.delete("http://localhost:8080/todo/")
            .then(response=>{
                window.location.reload();
            }).catch(error=>{
            console.log("error")
        })
    }
    render(){
        return(
            <div>
                <Button variant="contained" onClick={this.deleteTodo} color="secondary">Clear All</Button>
            </div>
        )
    }
}
export default ClearAll