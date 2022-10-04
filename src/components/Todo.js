import { changeValid, removeTodo } from "../redux/todoSlice";

import React from "react";
import { connect } from "react-redux";

class Todo extends React.Component {
    changeValid = () => {
        this.props.changeValid(this.props.index);
    }
    removeTodo = () => {
        this.props.removeTodo(this.props.index);
    }
    render() {
        return (
        <div className="flex rounded-2xl bg-[#031955] h-14 w-[86%]">
            <div onClick={this.changeValid} className=" z-10 flex items-center text-white pl-4 ">
                {this.props.valid ? <img width={"30px"} src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-check-multimedia-kiranshastry-lineal-color-kiranshastry.png" /> : <img width={"30px"} src="https://img.icons8.com/color/344/circled.png"/>}
            </div>
            <div onClick={this.removeTodo} className="w-full pl-3 flex items-center text-white">
                {this.props.valid ? <h1 className=" line-through">{this.props.name}</h1> : <h1>{this.props.name}</h1>} 
            </div>
        </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeValid : (index) => dispatch(changeValid(index)),
        removeTodo : (index) => dispatch(removeTodo(index))
    }
}
export default connect(null, mapDispatchToProps)(Todo);