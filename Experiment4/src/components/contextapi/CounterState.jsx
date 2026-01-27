export default function LocalCounter({ count, setCount }) {
  return (
    <>
      <button className="inc" onClick={() => setCount(count + 1)}>
        INCREASE
      </button>
      <button className="dec" onClick={() => setCount(count - 1)}>
        DECREASE
      </button>
    </>
  );
}
