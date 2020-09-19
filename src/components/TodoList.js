import React from 'react'

const TodoList = (props) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "12px" }}>{props.heading}</p>
            <ul style={{ margin: "8px 0", padding: 0 }}>
                {props.children}
            </ul>
        </div>
    )
}

export default TodoList
