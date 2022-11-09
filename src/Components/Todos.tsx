import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// <{items?:string[]}>
const Todos:React.FC<{items:Todo[]}> = (props)  => {
    return <ul>
        {props.items.map(item => <TodoItem text={item.text} key={item.id} />)}
    </ul>
}

export default Todos;