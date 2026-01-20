import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function MuiRating() {
  const [value, setValue] = useState(3);

  return (
    <Rating
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{
        "& .MuiRating-iconFilled": {
          color: "#FFD700",
        },
        "& .MuiRating-iconEmpty": {
          color: "#777",
        },
      }}
    />
  );
}
