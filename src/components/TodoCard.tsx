import type { Todo } from "../types/todo";
import { useTodo } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

export default function TodoCard({ todo }: Props) {
  const { deleteTodo, startEdit } = useTodo();

  return (
    <div className="border border-purple-400 rounded-xl p-4 shadow-md">
      <h3 className="font-bold">Title: {todo.title}</h3>
      <p className="text-purple-200 mt-2">
        Description: {todo.description}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => startEdit(todo)}
          className="bg-blue-600 px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
