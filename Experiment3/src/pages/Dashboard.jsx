import { useState } from "react";

import MuiButton from "../components/ui/MuiButton";
import MuiTextField from "../components/ui/MuiTextField";
import MuiSelect from "../components/ui/MuiSelect";
import MuiRating from "../components/ui/MuiRating";
import MuiCheckbox from "../components/ui/MuiCheckbox";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to SPA Development!</h1>

      <p>Button clicks: {count}</p>
      <MuiButton count={count} onClick={() => setCount(count + 1)} />

      <hr style={{ margin: "40px 0" }} />

      <h2>Experiment 2 – UI Components</h2>

      <div
        style={{
          maxWidth: "400px",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <MuiTextField />
        <MuiSelect />

        <div>
          <p>Rating Component</p>
          <MuiRating />
        </div>

        <MuiCheckbox />
      </div>
    </div>
  );
}
