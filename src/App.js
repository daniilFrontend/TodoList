
import { Route, Routes } from "react-router-dom";
import { Card } from "./UI/Card/Card";
import { Header } from "./components/Header/Header";
import { CurrentTodos } from "./components/Todos/CurrentTodos/CurrentTodosList/CurrentTodos";
import { DeletedTodos } from "./components/Todos/DeletedTodos/DeletedTodos";
import { CompletedTodos } from "./components/Todos/CompletedTodos/CompletedTodos";
import "./App.css"

function App() {
  //обертка в мэин для сброса стилей
  return (
    <div className="main">
      <Card>
        <Header />
        <Routes>
          <Route path="/" element={<CurrentTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />
          <Route path="/deleted" element={<DeletedTodos />} />
        </Routes>
      </Card>
    </div>
  );
}

export default App;
