import InputTodo from "./components/InputTodo";
import React from "react";
import Todo from "./components/Todo";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div className="flex flex-col w-full bg-[#344FA1] h-screen md:items-center">
        <h1 className="text-white text-2xl font-bold p-10">What's up</h1>
        <p className="text-xs text-slate-400 font-bold pl-10 w-[90%]">TODAY'S TASKS</p>
        <div className="flex gap-2 mt-4 flex-col items-center w-full">
          {this.props.todos.map((todo, index) => (
            <Todo key={index} name={todo.name} valid={todo.valid} index={index} />
          ))}
        </div>
        <InputTodo />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos : state.todo.todoList
  }
}

export default connect(mapStateToProps)(App);