import React from "react";

// <{items?:string[]}>
const TodoItem:React.FC<{text:string}> = (props)  => {

    return <li >{props.text}</li>
}

export default TodoItem;