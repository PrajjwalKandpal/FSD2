import "./App.css";
import { useState, useContext } from "react";
import LocalCounter from "./components/contextapi/CounterState";
import ParentCounter from "./components/contextapi/CounterParent";
import CounterReduxParent from "./components/redux/CounterGlobalReduxParent";
import { CounterContext } from "./components/contextapi/CounterContextApi";

export default function App() {
  const [localCount, setLocalCount] = useState(0);
  const { count: contextCount } = useContext(CounterContext);

  return (
    <div>

      <h1><center>Name: Prajjwal Kandpal</center></h1>
      <h1><center>UID: 23BIS70052</center></h1>
      <h2><center>Experiment 4: State Management using Redux</center></h2>
      {/* LOCAL STATE */}
      <div className="card local">
        <h2>2 : Local State Count: {localCount}</h2>
        <div className="btn-row">
          <LocalCounter count={localCount} setCount={setLocalCount} />
        </div>
      </div>

      {/* CONTEXT API */}
      <div className="card context">
        <h2>1 : Global State (ContextAPI) Count: {contextCount}</h2>
        <div className="btn-row">
          <ParentCounter />
        </div>
      </div>

      <div className="card context">
        <h2>2 : Global State (ContextAPI) Count: {contextCount}</h2>
        <div className="btn-row">
          <ParentCounter />
        </div>
      </div>

      {/* REDUX */}
      <div className="card redux">
        <CounterReduxParent cno="1" />
      </div>

      <div className="card redux">
        <CounterReduxParent cno="2" />
      </div>

    </div>
  );
}
