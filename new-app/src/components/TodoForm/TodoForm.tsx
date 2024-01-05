import { observer } from "mobx-react-lite";
import todoStore from "../../store/todoStore";
import { useState } from "react";
import './TodoForm.css'

const TodoForm: React.FC = observer(() => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const addTodo = () => {
    if (newTodoTitle.trim() === "") {
      // Проверка на пустое значение
      return;
    }
    todoStore.addTodo(newTodoTitle);
    setNewTodoTitle("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        className="input-text"
        placeholder="Enter todo title"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button className="add-todo" onClick={() => addTodo()}>
        Add Todo
      </button>
    </div>
  );
});

export default TodoForm;
