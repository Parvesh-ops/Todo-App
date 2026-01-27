import { useTodo } from "../context/TodoContext";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const { todos, search } = useTodo();

  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="border border-purple-500 rounded-xl p-5">
      <div className="flex flex-wrap -mx-2">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="w-full sm:w-1/2 px-2 mb-4">
            <TodoCard todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
