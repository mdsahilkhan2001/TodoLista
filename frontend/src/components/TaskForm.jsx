import { useState } from "react";
import api from "../api/axios.js";

function TaskForm({ onTaskAdded }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    try {
      const res = await api.post("/tasks", { content });
      onTaskAdded(res.data);
      setContent("");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
