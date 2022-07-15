import "./App.css";
import Counter2 from "./components/Counter2";
import TestMocking from "./components/TestMocking";
import Counter from "./feautures/counter/Counter";

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Counter />
      <br />
      <br />
      <Counter2 />
    </div>
  );
}

export default App;
