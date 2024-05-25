import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { login } from "../store/authSlice";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
  
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Container, ContainerText, OverallContainer } from "./dashboard.styled";

const Login = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(login(data))
      .unwrap()
      .then(() => {
        enqueueSnackbar("Login successful!", { variant: "success" });
        navigate("/dashboard");
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <OverallContainer>
      <Container sx={{}}>
        <ContainerText>
          <Box sx={{ marginTop: 5 }}>
            <img src="../assets/API-banking.png" alt="NFT Example" />
          </Box>
        </ContainerText>
        <ContainerText>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1,backgroundColor:"white",padding:3 }}
          >
             <Typography variant="h5" gutterBottom sx={{color:"black"}}>
           Wakabuy
      </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
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
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Box>
        </ContainerText>
      </Container>
    </OverallContainer>
  );
};

export default Login;
