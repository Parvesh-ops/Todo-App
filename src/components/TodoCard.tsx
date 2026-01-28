import { useTodo } from "../context/TodoContext";
import type { Todo } from "../types/todo";

const TodoCard = ({ todo }: { todo: Todo }) => {
  const { deleteTodo, startEdit } = useTodo();

  return (
    <div className="bg-black border border-purple-500 rounded-xl p-4 shadow-md">
      <h3 className="font-bold text-purple-300">{todo.title}</h3>
      <p className="text-gray-300 mt-2">{todo.description}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => startEdit(todo)}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
