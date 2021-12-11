import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm({ categories, onTaskFormSubmit  }) {
  const [newForm, setNewForm] = useState("")
  const [category, setCategory] = useState("Code")


  function handleSubmit(e){
    e.preventDefault()
    //setNewForm(e.target.value)
    console.log(newForm)
    console.log(category)
    let newTask = {
      text: newForm,
      category: category
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={newForm} onChange={(e) => setNewForm(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => {
           return <option key={item}>{item}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
