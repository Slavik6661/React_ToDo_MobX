import { useEffect } from "react";
import todoStore from "../../store/todoStore";
import { observer } from "mobx-react-lite";
import complitImage from "../../image/complit.png";
import notcomplitImage from "../../image/notComplit.png";
import "./TodoList.css";

const TodoList: React.FC = observer(() => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  function todoCompleted(): void {
    throw new Error("todoCompleted");
  }

  const deleteTodo =async(id:number)=>{
   await todoStore.deleteTodo(id)
  }
  const toggleTodoCompleted = async (id: number, completed: boolean) => {
    await todoStore.toggleTodoCompleted(id, completed);
  };

  return (
    <div className="todo-list">
      {todoStore.status === "pending" && <p>Loading...</p>}
      {todoStore.status === "error" && (
        <p className="text-danger">Error fetching todos.</p>
      )}
      {todoStore.status === "success" && (
        <ul className="ul-items">
          {todoStore.todos.map((todo) => (
            <div className="contener">
              <img
                className="imgState"
                src={todo.completed ? complitImage : notcomplitImage}
                alt={todo.completed ? "Completed" : "Not Completed"}
                onClick={(e) =>{
                  e.preventDefault();
                  toggleTodoCompleted(todo.id,todo.completed)
                }}
              />
              <li key={todo.id} className="todo-item">
                <span>
                  {todo.title} -{" "}
                  {todo.completed ? "Completed" : "Not Completed"}
                </span>
                <div className="todo-buttons">
                  <button className="btnDelete" onClick={() => deleteTodo(todo.id)}></button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
});
export default TodoList;
