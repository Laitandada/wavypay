import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, Button } from "@mui/material";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, ContainerText, OverallContainer } from "./dashboard.styled";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <OverallContainer>
 
      <Container
      sx={{
     
      }}
    >
       
        <ContainerText>
        <Typography variant="h5" gutterBottom>
           Wakabuy
      </Typography>
           <Typography variant="h2" gutterBottom>
           Welcome to the your Dashboard, 
      </Typography>
      <Typography variant="h3" gutterBottom>
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
    <ContainerText>
        <Box sx={{ marginTop: 5 }}>
        <img src="../assets/wakabuy.png" alt="NFT Example" />
      </Box>
     
    </ContainerText>
    
    </Container>    
    </OverallContainer>
  
  );
};

export default Dashboard;
