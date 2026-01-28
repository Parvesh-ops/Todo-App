import { useTodo } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { todos, search } = useTodo();

  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filteredTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
