const Task = (props) => {
  const deleteTask = () => {
    props.onDelete(props.task.description);
  };

  return (
    <div>
      <span>{props.task.description}</span>
      <input type="checkbox"></input>
      <button onClick={deleteTask}>X</button>
    </div>
  );
};

export default Task;
