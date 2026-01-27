import { createContext, useContext, useState } from "react";
import type { Todo } from "../types/todo";

interface TodoContextType {
    todos: Todo[];
    editTodo: Todo | null;
    search: string;
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
    startEdit: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [editTodo, setEditTodo] = useState<Todo | null>(null)
    const [search, setSearch] = useState<string>('')

    //add Todo
    const addTodo = (todo: Todo) => {
        setTodos((prev) => [...prev, todo])
    }

    //delete Todo
    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }

    //edit todo
    const startEdit = (todo: Todo) => {
        setEditTodo(todo)
    }

    //update Todo
    const updateTodo = (updatedTodo: Todo) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
        );
        setEditTodo(null);
    };
    return (
        <TodoContext.Provider value={{ todos, editTodo, search, addTodo, deleteTodo, startEdit, updateTodo, setSearch }}>
            {children}
        </TodoContext.Provider>
    )
};

//hoooks
export const useTodo = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("useTodo must be used inside TodoProvider");
    }
    return context
};