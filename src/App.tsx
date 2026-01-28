import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodo } from "./context/TodoContext";

const App = () => {
  const { search, setSearch } = useTodo();

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-300">
        Todo List
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-black border border-purple-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TodoForm />
        <div className="md:col-span-2">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
