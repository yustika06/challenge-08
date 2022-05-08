import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // menyimpan todo di localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);

    setTodo("");
  };

  const delHandler = (todoId) => {
    const updatedTodos = todos.filter((item) => item.id !== todoId);

    setTodos(updatedTodos);
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(newTodo);
  };

  return (
    <Layout>
      <Header />
      <Form value={todo} submit={submitHandler} onChange={(e) => setTodo(e.target.value)} />
      <hr className="border-primary" />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  );
};

export default App;
