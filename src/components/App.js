import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasksStateArray, setTasksStateArray] = useState(TASKS)

  function handleTaskDelete(text){
    const newTaskArr = tasksStateArray.filter(
      (task) => task.text !== text);
    setTasksStateArray(newTaskArr)
  }

  function addTask(newTask){
    setTasksStateArray([...tasksStateArray, newTask])
  }

  // tasksStateArray is set to give us the current state of the asks and also avoid overriding the state when we pass it in our TaskList component
  
  
  function handleCategorySelect(newSelectedCategory){
    console.log('click!')
    setSelectedCategory(newSelectedCategory)
    
  }

  const filterTasks = tasksStateArray.filter((task) => {
    if (selectedCategory === "All"){
      return true
    }
    else {
      return task.category === selectedCategory
    }
  })

  return (
    <div className="App"> 
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategorySelect={handleCategorySelect} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={filterTasks} handleTaskDeleteFunction={handleTaskDelete} />
    </div>
  );
}

export default App;
