import styled from "@emotion/styled";
import { Box, Button, Divider, Typography,Link } from "@mui/material";

export const OverallContainer = styled(Box)`

display: flex;



min-height: 100vh;
background-color: #121212;
color: #fff;
text-align: center;
width: 100%;

`;
export const Container = styled(Box)`

display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: #121212;
color: #fff;
text-align: center;
width: 80%;
gap :30px;
margin:0 auto ;
`;

export const ContainerText = styled(Box)`

display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
`;

export const GoogleAuthButton = styled(Button)`

margin-top:1rem;


  @media (max-width: 900px) {
  }
`;

