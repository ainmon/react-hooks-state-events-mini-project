import React from "react";


function Task( {text, category, onDeleteTask} ) {
  
  function handleClickDelete() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="category">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClickDelete}>X</button>
    </div>
  )

}

export default Task;
