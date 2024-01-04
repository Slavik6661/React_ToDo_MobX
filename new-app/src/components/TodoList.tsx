import { useEffect } from "react";
import todoStore from "../store/todoStore";
import { observer } from "mobx-react-lite";

const TodoList: React.FC = observer(() => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  function todoCompleted(): void {
    throw new Error("todoCompleted");
  }

  function deleteTodo(): void {
    throw new Error("deleteTodo");
  }

  return (
    <div className="todo-list">
      {todoStore.status === "pending" && <p>Loading...</p>}
      {todoStore.status === "error" && (
        <p className="text-danger">Error fetching todos.</p>
      )}
      {todoStore.status === "success" && (
        <ul className="ul-items">
          {todoStore.todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>
                {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
              </span>
              <div className="todo-buttons">
                <button onClick={() => todoCompleted()}>Complete</button>
                <button onClick={() => deleteTodo()}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
export default TodoList;
