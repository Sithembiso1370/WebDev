import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import CreateTodo from "./components/CreateTodo/CreateTodo";

function App() {
  return (
    <div className="todo-Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayTodo/>} />
          <Route path="/add-list" element={<CreateTodo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;