import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { register as registerUser } from '../store/authSlice';
import { TextField, Button, Box, CircularProgress, Typography,  IconButton,
    InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OverallContainer,Container, ContainerText, ContainerTextImage } from './dashboard.styled';

  import { Visibility, VisibilityOff } from "@mui/icons-material";
const Register = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loading, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };


  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        enqueueSnackbar('Registration successful!', { variant: 'success' });
        navigate('/dashboard');
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: 'error' });
      });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn,navigate]);

  return (
    <OverallContainer>
      <Container>
        <ContainerTextImage>
          <Box sx={{ marginTop: 5 }}>
            <img src="../assets/API-banking.png" alt="NFT Example" />
          </Box>
        </ContainerTextImage>
        <ContainerText>
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ backgroundColor:"white",padding:3,borderRadius:"7px" }}
          >
             <Typography variant="h4" gutterBottom sx={{color:"black",mt:5}}>
           WavyPay
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Username"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 4,
            message: 'Username must be at least 4 characters',
          },
        })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Invalid email format',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/,
                  message: "Password must include at least one letter, one number, and one symbol",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Register'}
      </Button>




      <Typography variant="h6" gutterBottom sx={{color:"black",pb: 5,mt:1}}>
          Already have an account?  <a href='/login'>Login</a>
      </Typography>
    </Box>

    </ContainerText>
      </Container>
    </OverallContainer>
  );
};

export default Register;
