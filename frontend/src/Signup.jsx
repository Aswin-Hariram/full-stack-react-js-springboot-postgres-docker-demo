import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert, IconButton, InputAdornment } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { LockOutlined, Visibility, VisibilityOff, Clear } from '@mui/icons-material';
import axios from 'axios';

function Signup() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Submitted Data:', data);
        axios
            .post('http://localhost:8080/auth/signup', data)
            .then((response) => {
                console.log(response.data);
                if (response.data === "Email is already in use!") {
                    setAlert({ open: true, message: 'User already exists. Please try again.', severity: 'error' });
                } else {
                    setAlert({ open: true, message: 'Signup successful!', severity: 'success' });
                    reset(); // Reset form after successful submission
                }
            })
            .catch((err) => {
                console.log(err);
                setAlert({ open: true, message: 'Signup failed. Please try again.', severity: 'error' });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
            <Container component="main" maxWidth="xs" className="bg-white p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LockOutlined sx={{ fontSize: 50, color: '#764ba2', backgroundColor: 'rgba(118, 75, 162, 0.1)', borderRadius: '50%', padding: '12px' }} />
                    <Typography component="h1" variant="h4" className="mt-4 font-bold" style={{ color: '#764ba2' }}>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                    message: 'Invalid email address',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    InputProps={{
                                        endAdornment: field.value && (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => field.onChange('')}>
                                                    <Clear />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                                validate: (value) => {
                                    const hasUpperCase = /[A-Z]/.test(value);
                                    const hasLowerCase = /[a-z]/.test(value);
                                    const hasNumber = /[0-9]/.test(value);
                                    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                                    return (
                                        hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
                                    ) || 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                                />
                            )}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, padding: '12px', borderRadius: '12px', backgroundColor: '#764ba2', '&:hover': { backgroundColor: '#667eea' } }}>
                            Sign Up
                        </Button>
                    </form>
                </Box>
            </Container>
            <Snackbar open={alert.open} autoHideDuration={4000} onClose={() => setAlert({ ...alert, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Signup;