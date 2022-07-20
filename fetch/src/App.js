import "./App.css";
import Counter2 from "./components/Counter2";
import MobxExample from "./components/MobxExample";
import TestMocking from "./components/TestMocking";
import TodoList from "./components/TodoList";
import Counter from "./feautures/counter/Counter";
import { observableTodoStore } from "./app/ObservableTodoStore";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/FontButton";
import Text from "./components/RecoilExample/Text";
import CharacterCounter from "./components/RecoilExample/CharacterCounter";

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br />
      <Counter2 /> */}
      {/* <MobxExample/> */}
      {/* <TodoList store={observableTodoStore}/> */}
      <RecoilRoot>
        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
