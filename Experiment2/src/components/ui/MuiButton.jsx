import Button from "@mui/material/Button";

export default function MuiButton({ count, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#1976d2",   // bright blue
        color: "#ffffff",             // white text
        fontWeight: "bold",
        padding: "10px 24px",
        textTransform: "uppercase",
        "&:hover": {
          backgroundColor: "#115293", // darker blue on hover
        },
      }}
    >
      Click Me ({count})
    </Button>
  );
}
