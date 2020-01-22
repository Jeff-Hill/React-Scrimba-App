import React from "react"

function ToDoItem (props) {
    return (
        <div className="todo-item">

                <label htmlFor="task">
                    {props.task.taskName}
                </label>
                <input name="task" type="checkbox"/>
                <p>{props.task.taskDescription} will take {props.task.taskTimeLimit}</p>


        </div>
    )
}

export default ToDoItem