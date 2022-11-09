import React from "react";

// <{items?:string[]}>
const Todos:React.FC<{items:string[]}> = (props)  => {

    return <ul>
        {props.items.map(item => <li key={item}>{item}</li>)}
    </ul>
}

export default Todos;