import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "./store/todoStore";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
