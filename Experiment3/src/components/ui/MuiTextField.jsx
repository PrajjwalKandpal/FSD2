import TextField from "@mui/material/TextField";

export default function MuiTextField() {
  return (
    <TextField
      label="Enter your name"
      variant="outlined"
      fullWidth
      margin="normal"
      InputLabelProps={{ style: { color: "#ffffff" } }}
      InputProps={{ style: { color: "#ffffff" } }}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ffffff",
        },
      }}
    />
  );
}
