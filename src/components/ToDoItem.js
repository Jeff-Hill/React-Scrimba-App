import React from "react"

function ToDoItem () {
    return (
        <div className="todo-item">

                <label htmlFor="task">Task</label>
                <input name="task" type="checkbox"/>
                <p>Placeholder Text</p>


        </div>
    )
}

export default ToDoItem