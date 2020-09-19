import React from 'react'

const Todo = (props) => {
    const { number, title, isDone } = props.todo;
    const colorStyle = isDone ? 
                        { backgroundColor: "#a8dadc", color: "#fff", textDecoration: "line-through"} :
                        { backgroundColor: "#fff", color: "#333" }
    return (
        <li 
            id={number}
            onClick={(e) => props.onClick(e)}
            style={{...itemStyle, ...colorStyle}}
        >
            {number < 10 ? `0${number}` : number}.&nbsp;&nbsp;{title}
        </li>
    )
}

const itemStyle = {
    padding: "16px 32px",
    listStyle: "none",
    marginBottom: "8px",
    borderRadius: "8px",
    boxShadow: "rgb(42 140 144) 0 0 4px",
    cursor: "pointer"
}

export default Todo