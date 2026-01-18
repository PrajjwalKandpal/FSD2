import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [course, setCourse] = useState("");

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel sx={{ color: "#ffffff" }}>Course</InputLabel>
      <Select
        value={course}
        label="Course"
        onChange={(e) => setCourse(e.target.value)}
        sx={{
          color: "#ffffff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "& .MuiSvgIcon-root": {
            color: "#ffffff",
          },
        }}
      >
        <MenuItem value="react">React</MenuItem>
        <MenuItem value="angular">Angular</MenuItem>
        <MenuItem value="vue">Vue</MenuItem>
      </Select>
    </FormControl>
  );
}
