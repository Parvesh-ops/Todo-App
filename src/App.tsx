import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useTodo } from "./context/TodoContext"

const App = () => {
  const { search, setSearch } = useTodo()
  return (
    <div className="min-h-screen bg-linear-to-br from-[#1a002b] to-[#12001f] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-300">
        Todo List
      </h1>

    <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search task by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 rounded border border-purple-400 text-white"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TodoForm />
        <TodoList />
      </div>

    </div>
  )
}

export default App
