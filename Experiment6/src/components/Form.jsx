import {
  TextField,
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from "@mui/material";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // NEW STATES
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    // Email validation (custom)
    if (!email) temp.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      temp.email = "Enter a valid email";

    // Password validation
    if (!password) temp.password = "Password is required";
    else if (password.length < 6) temp.password = "Min 6 characters";

    // Radio validation
    if (!gender) temp.gender = "Please select gender";

    // Checkbox validation
    if (!terms) temp.terms = "You must accept Terms & Conditions";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Built-in validation check
    if (e.target.checkValidity()) {
      console.log("Built-in validation passed");
    }

    // Custom validation
    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log({ email, password, gender, terms });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Registration Form (MUI + Validations)
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <TextField
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth
          margin="normal"
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        {/* PASSWORD */}
        <TextField
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          fullWidth
          margin="normal"
          inputProps={{ minLength: 6 }}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        {/* RADIO BUTTONS */}
        <FormControl
          margin="normal"
          error={Boolean(errors.gender)}
          sx={{ width: "100%" }}
        >
          <FormLabel>Gender</FormLabel>

          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <Typography variant="caption" color="error">
            {errors.gender}
          </Typography>
        </FormControl>

        {/* CHECKBOX */}
        <FormControlLabel
          control={
            <Checkbox
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
          }
          label="I accept Terms & Conditions"
        />

        <Typography variant="caption" color="error" display="block" gutterBottom>
          {errors.terms}
        </Typography>

        {/* SUBMIT */}
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
