import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

export default function ParentCounter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
      <button onClick={() => setCount(count - 1)}>DECREASE</button>
    </>
  );
}
