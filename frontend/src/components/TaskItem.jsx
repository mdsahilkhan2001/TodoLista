 import api from "../api/axios.js";

function TaskItem({ task, onUpdated, onDeleted }) {
  const toggleComplete = async () => {
    try {
      const res = await api.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });
      onUpdated(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);
      onDeleted(task._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={toggleComplete}>{task.content}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
