import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, onUpdated, onDeleted }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdated={onUpdated}
          onDeleted={onDeleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;
