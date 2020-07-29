import React, {Component} from "react";
import "./style.css"
import { Button } from '@material-ui/core';
import axios from "axios"
import PutForm from "./PutForm";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
class TodoList extends Component{
    editId = null
    constructor() {
        super();
        this.state={
            items: [],
            isLoading: false,
            showModal:true
        }
        this.handleClick=this.handleClick.bind(this)

    }
    componentDidMount() {
        // this.fetchDataWithAxios();
        fetch("http://localhost:8080/todo")
            .then(response=>response.json())
            .then(response => {
                this.setState({
                    items:response.data,
                    isLoading:true,
                    showModal:false
                })
            })
    }
    handleClick(id) {
        this.editId = id
        this.setState({
            showModal:!this.state.showModal
        })
        console.log(this.editId)
    }
    deleteTodo(todo){
        // console.log(todo);
        // const newState = this.state.items.slice();
        // console.log(newState.splice(newState.indexOf(todo),1))
        // console.log(newState)
        axios.delete("http://localhost:8080/todo/"+todo.id)
            .then(response=>{
               window.location.reload();
            }).catch(error=>{
                console.log("error")
        })
    }
    render() {
        let styles={backgroundColor:'black', color: 'white',fontSize: '15pt'}
        let postform = null;
        if(this.state.showModal){
            postform = <PutForm id={this.editId}/>
        }
        const {isLoading,items} = this.state;
        if(!isLoading){
            return <div>Loading...</div>
        }
        else{
            return(
                <TableContainer component={Paper}>{postform} <Table size="medium" style={{ width: "100%" }}aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={styles}>Mark as Completed</TableCell>
                            <TableCell align="center" style={styles}>Todo List</TableCell>
                            <TableCell align="center" style={styles}>Update the Item</TableCell>
                            <TableCell align="center" style={styles}>Remove from List</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        items.map(ob =><TableRow key={ob.id}>
                            <TableCell align="center"><input type="checkbox" id="{ob.id}" checked={ob.completed}></input></TableCell>
                            <TableCell align="center"> <label htmlFor="{ob.id}">{ob.item}</label></TableCell>
                            <TableCell align="center"><Button variant="contained"  color="primary" onClick={this.handleClick.bind(this,ob.id)}>Edit</Button></TableCell>
                            <TableCell align="center"><Button variant="contained" color="primary" onClick={this.deleteTodo.bind(this,ob)}>Delete</Button></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </TableContainer>

            )
        }

    }
}
export default TodoList