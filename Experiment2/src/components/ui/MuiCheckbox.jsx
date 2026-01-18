import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function MuiCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      sx={{ color: "#ffffff" }}
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          sx={{
            color: "#ffffff",
            "&.Mui-checked": {
              color: "#1976d2",
            },
          }}
        />
      }
      label="Accept Terms"
    />
  );
}
