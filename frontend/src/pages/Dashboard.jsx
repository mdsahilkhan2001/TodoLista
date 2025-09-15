import { useEffect, useState } from "react";
import api from "../api/axios.js";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (task) => setTasks([...tasks, task]);
  const handleTaskUpdated = (updated) =>
    setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
  const handleTaskDeleted = (id) =>
    setTasks(tasks.filter((t) => t._id !== id));

  return (
    <div className="dashboard">
      <h2>Your Tasks</h2>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList
        tasks={tasks}
        onUpdated={handleTaskUpdated}
        onDeleted={handleTaskDeleted}
      />
    </div>
  );
}

export default Dashboard;
