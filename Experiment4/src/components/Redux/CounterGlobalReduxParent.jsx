import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent({ cno }) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{cno} : Global State (Redux) Count: {count}</h2>
      <div className="btn-row">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREASE
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREASE
        </button>
      </div>
    </>
  );
}
