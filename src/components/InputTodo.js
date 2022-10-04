import React from "react";
import { addTodo } from "../redux/todoSlice";
import { connect } from "react-redux";

class InputTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
        }
    }
    onChange = (e) => {
        this.setState({
            name : e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({
            valid : false,
            name : this.state.name
        })
        this.setState({name : ""})
    }
    render() {
        return (
        <div className="w-full h-16 absolute bottom-0 flex items-center justify-center">
            <form onSubmit={(e) => this.onSubmit(e)} className="w-full flex justify-center">
                <input onChange={this.onChange} className="text-white pl-3 rounded-lg bg-[#031955] w-[90%] md:w-[85%] h-10" type={"text"} placeholder="Create new Todo" />
            </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (todo) => dispatch(addTodo(todo))
    }
}
export default connect(null, mapDispatchToProps)(InputTodo);