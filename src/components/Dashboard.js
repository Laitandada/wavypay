import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, Button } from "@mui/material";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, ContainerText, ContainerTextImage, OverallContainer } from "./dashboard.styled";
import { useSnackbar } from "notistack";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    enqueueSnackbar("Logout successful!", { variant: "success" });
  };

  return (
    <OverallContainer>
 
      <Container
      sx={{
     
      }}
    >
       
        <ContainerText>
        <Typography variant="h1" gutterBottom>
        WavyPay
      </Typography>
           <Typography variant="h3" gutterBottom>
           Welcome to your dashboard
      </Typography>
      <Typography variant="h4" gutterBottom>
      {user.username}!
      </Typography>
      <Button
        variant="contained"
      
        sx={{ marginTop: 5,backgroundColor:"#0d6efd",padding:1.5, width:"200px",borderRadius:"100px" }}
        onClick={handleLogout}
      >
        Log out
      </Button>    
        </ContainerText>
    <ContainerTextImage>
        <Box sx={{ marginTop: 5 }}>
        <img src="../assets/wakabuy.png" alt="NFT Example" />
      </Box>
     
    </ContainerTextImage>
    
    </Container>    
    </OverallContainer>
  
  );
};

export default Dashboard;
