import Task from "./Task";
import { useState } from "react";

const ToDoList = (props) => {
  const [tareas, setTareas] = useState([]);

  const addTarea = (description) => {
    setTareas([...tareas, { description, isDone: false }]);
  };

  const deleteTarea = (description) => {
    const newTareas = tareas.filter(
      (tarea) => tarea.description !== description
    );
    setTareas(newTareas);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      addTarea(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input placeholder="To do list" onKeyDown={onKey}></input>
      {tareas.map((tarea) => (
        <Task key={tarea.description} onDelete={deleteTarea} task={tarea} />
      ))}
    </div>
  );
};

export default ToDoList;
