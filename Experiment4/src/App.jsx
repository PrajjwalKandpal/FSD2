import "./App.css";
import CounterReduxParent from "./components/Redux/CounterGlobalReduxParent";

function App() {
  return (
    <div>
      <h2>Experiment 4 : State Management using Redux</h2>

      <CounterReduxParent cno="Counter 1" />
      <CounterReduxParent cno="Counter 2" />

      <h2>Name : Prajjwal Kandpal</h2>
      <h2>UID : 23BIS70052</h2>
    </div>
  );
}

export default App;



