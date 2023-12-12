import { Close, Visibility, VisibilityOff } from '@mui/icons-material';
import { 
    Button, FormControl, Grid, 
    IconButton, InputAdornment, InputLabel, 
    List, ListItem, ListItemIcon, ListItemText, 
    OutlinedInput 
} from '@mui/material';
import React, { useState } from 'react';

const PasswordEntry = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationResults, setValidationResults] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (pwd, confirmPwd) => {
    //Initialize validation result
    let tempValidationResults = [];

    // Password validation rules
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*()_+={[}]|:;"'<,>.]/.test(pwd);

    // Check if both passwords match
    const passwordsMatch = pwd === confirmPwd;

    // Check if all validation rules are met
    if (password.length < minLength) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password has more than 6 characters.'
      ];
    }
    if (!hasUpperCase) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password has an uppercase character.'
      ];
    }
    if (!hasLowerCase) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password has a lowercase character.'
      ];
    }
    if (!hasNumber) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password has a number.'
      ];
    }
    if (!hasSpecialChar) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password has special characters.'
      ];
    }
    if (!passwordsMatch) {
        tempValidationResults = [
        ...tempValidationResults,
        'Password match.'
      ];
    }

    if (tempValidationResults.length > 0) {
        setValidationResults(tempValidationResults);
        return false;
    } else {
        setValidationResults([]);
        return true;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validate(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validate(password, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (validate(password, confirmPassword)) {
        onSubmit(password);
    }
  };

  return (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: '36ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
            />
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: '36ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <List style={{ margin: '0 auto', width: '37ch' }}>
                {validationResults.map((el, index) => (
                    <ListItem key={index} style={{ padding: 0, justifyContent: 'flex-start' }}>
                        <ListItemIcon style={{ minWidth: 30, color: '#d32f2f' }}>
                            <Close />
                        </ListItemIcon>
                        <ListItemText
                            primary={el}
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" color="success" style={{ height: 42 }} onClick={handleSubmit}>Submit</Button>
        </Grid>
    </Grid>
  );
};

export default PasswordEntry;
