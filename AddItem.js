import React, {Component} from "react";
import {Button} from "@material-ui/core";
import PostForm from "./PostForm";
// import PostForm from "./PostForm";
// import App from "./App";
class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    render() {
        let postform = null;
        if (this.state.showModal) {
            postform=<PostForm/>;
        }
        return (
            <div>
                <Button variant="contained" onClick={this.handleClick} label="Action" color="secondary">Add a new item</Button>
                {postform}
            </div>
        );
    }
}
export default AddItem