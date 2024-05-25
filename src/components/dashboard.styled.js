import styled from "@emotion/styled";
import { Box} from "@mui/material";

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
width: 90%;
gap :30px;
margin:0 auto ;
`;

export const ContainerTextImage = styled(Box)`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
@media (max-width: 1080px) {
    display:none
  }
`;
export const ContainerText = styled(Box)`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

`;



