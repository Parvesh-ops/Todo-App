import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
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
      addTodo({ id: Date.now(), title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-purple-500 rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-xl mb-4 text-purple-300">
        {editTodo ? "Edit Task" : "Add Task"}
      </h2>

      <input
        className="w-full mb-3 px-3 py-2 rounded bg-gray-900 border border-purple-400"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-3 px-3 py-2 rounded bg-gray-900 border border-purple-400"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
