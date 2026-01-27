import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoForm() {
  const { addTodo, updateTodo, editTodo } = useTodo();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
    }
  }, [editTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editTodo) {
      updateTodo({ ...editTodo, title, description });
    } else {
      addTodo({
        id: Date.now(),
        title,
        description,
      });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="border border-purple-500 rounded-xl p-5">
      <h2 className="text-xl mb-4 text-purple-300">
        {editTodo ? "Edit Task" : "Add Task"}
      </h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border border-purple-400 rounded"
      />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-3 p-2 border border-purple-400 rounded"
      />

      <button className="w-full bg-purple-600 rounded py-2">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
}
