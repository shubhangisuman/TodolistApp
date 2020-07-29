  import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import axios from "axios";
class PutForm extends Component{
    constructor(props) {
        super();
        this.state={
            open:true,
            item:'',
            completed:''
        }
    }
    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }
    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e=>{
        e.preventDefault()
        let record = {
            id : this.props.id,
            item : this.state.item,
            completed : this.state.completed
        }
        console.log(this.props)
        axios.put("http://localhost:8080/todo/"+this.props.id,record)
        window.location.reload()
    }
    render() {
        const {open} = this.state
        const {item,completed} = this.state;
        let dialogDom = null
        if(this.props.id!=null){
            dialogDom = (
                <React.StrictMode>
                    <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Update your todo list:
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Id"
                                type="text"
                                value={this.props.id}
                                name="id"
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                type="text"
                                label="Todo Item"
                                value={item}
                                name="item"
                                onChange={this.changeHandler}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                type="text"
                                label="Completed"
                                value={completed}
                                name="completed"
                                onChange={this.changeHandler}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.submitHandler} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.StrictMode>
            )
        }
        return(
            <div>
                {dialogDom}
            </div>
        );
    }
}
export default PutForm