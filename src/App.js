import "./App.css";
import { Title } from "./components/Title/Title";
import { TodoContainer } from "./containers/TodoContainer";

function App() {
  return (
    <div className="App">
      <Title title="todos" />
      <TodoContainer />
    </div>
  );
}

export default App;
