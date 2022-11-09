import React from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

import { useContext } from "react";
import { TodosContext } from "../store/todos-context";


// <{items?:string[]}>
const Todos:React.FC = ()  => {
    const todoCtx = useContext(TodosContext);
    return <ul className={classes.todos}>
        {todoCtx.items.map(item => <TodoItem onRemoveTodo={todoCtx.removeTodo.bind(null,item.id)} text={item.text} key={item.id} />)}
    </ul>
}

export default Todos;