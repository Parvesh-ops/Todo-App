import { createContext, useContext, useState, useEffect } from "react";
import type { Todo } from "../types/todo";


interface TodoContextType {
  todos: Todo[];
  editTodo: Todo | null;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  startEdit: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [search, setSearch] = useState<string>("");

  // 🔹 Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (todo: Todo) => {
    setEditTodo(todo);
  };

  const updateTodo = (updatedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
    setEditTodo(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        editTodo,
        search,
        setSearch,
        addTodo,
        deleteTodo,
        startEdit,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used inside TodoProvider");
  }
  return context;
};
