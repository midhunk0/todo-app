import React from "react";

function ToDoItem(props) {
  const doneStyle = {
    textDecoration: "line-through",
  };

  return (
    <div>
      <li style={props.isDone ? doneStyle : undefined}>
        {props.text}
        <button onClick={() => props.onEdit(props.id)} style={{ marginLeft: "10px" }}>
          edit
        </button>
        <button onClick={() => props.onDone(props.id)} style={{ marginLeft: "10px" }}>
          done
        </button>
        <button onClick={() => props.onChecked(props.id)} style={{ marginLeft: "10px" }}>
          delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
